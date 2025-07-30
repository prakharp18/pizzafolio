// Memory management utilities for images

class ImageMemoryManager {
  constructor(maxCacheSize = 50) {
    this.cache = new Map()
    this.maxCacheSize = maxCacheSize
    this.loadTimes = new Map()
  }

  // Add image to memory cache
  cacheImage(src, imageElement) {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxCacheSize) {
      const oldestKey = this.cache.keys().next().value
      this.removeFromCache(oldestKey)
    }

    this.cache.set(src, {
      element: imageElement,
      timestamp: Date.now(),
      accessed: Date.now()
    })
  }

  // Get image from cache
  getCachedImage(src) {
    const cached = this.cache.get(src)
    if (cached) {
      cached.accessed = Date.now()
      return cached.element
    }
    return null
  }

  // Remove image from cache and clean up
  removeFromCache(src) {
    const cached = this.cache.get(src)
    if (cached && cached.element) {
      // Clean up blob URLs to prevent memory leaks
      if (cached.element.src.startsWith('blob:')) {
        URL.revokeObjectURL(cached.element.src)
      }
      // Remove event listeners
      cached.element.onload = null
      cached.element.onerror = null
    }
    this.cache.delete(src)
  }

  // Clean up unused images (older than 5 minutes)
  cleanupUnusedImages() {
    const now = Date.now()
    const maxAge = 5 * 60 * 1000 // 5 minutes

    for (const [src, cached] of this.cache.entries()) {
      if (now - cached.accessed > maxAge) {
        this.removeFromCache(src)
      }
    }
  }

  // Get cache statistics
  getCacheStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxCacheSize,
      entries: Array.from(this.cache.entries()).map(([src, cached]) => ({
        src,
        age: Date.now() - cached.timestamp,
        lastAccessed: Date.now() - cached.accessed
      }))
    }
  }

  // Clear entire cache
  clearCache() {
    for (const src of this.cache.keys()) {
      this.removeFromCache(src)
    }
  }
}

// Global instance
export const imageMemoryManager = new ImageMemoryManager()

// Auto cleanup every 2 minutes
setInterval(() => {
  imageMemoryManager.cleanupUnusedImages()
}, 2 * 60 * 1000)

// Image compression utility
export const compressImage = (file, quality = 0.8, maxWidth = 1920) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      // Calculate new dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height)
      canvas.width = img.width * ratio
      canvas.height = img.height * ratio

      // Draw and compress
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      canvas.toBlob(resolve, 'image/jpeg', quality)
    }

    img.src = URL.createObjectURL(file)
  })
}

// Progressive image loading with blur effect
export const createProgressiveImage = (lowQualitySrc, highQualitySrc) => {
  return new Promise((resolve) => {
    const img = new Image()
    const lowImg = new Image()

    // Load low quality first
    lowImg.onload = () => {
      // Start loading high quality
      img.onload = () => {
        resolve({ lowQuality: lowImg, highQuality: img })
      }
      img.src = highQualitySrc
    }

    lowImg.src = lowQualitySrc
  })
}
