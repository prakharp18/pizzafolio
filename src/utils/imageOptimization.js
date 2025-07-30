// Image optimization utilities

// Check if browser supports WebP
export const supportsWebP = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').startsWith('data:image/webp')
}

// Get optimized image source with fallback
export const getOptimizedImageSrc = (baseSrc) => {
  const isWebPSupported = supportsWebP()
  const extension = baseSrc.split('.').pop()
  const baseName = baseSrc.replace(`.${extension}`, '')
  
  if (isWebPSupported) {
    return `${baseName}.webp`
  }
  return baseSrc
}

// Preload images with priority
export const preloadImage = (src, priority = 'low') => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    
    // Set loading priority
    if ('loading' in img) {
      img.loading = priority === 'high' ? 'eager' : 'lazy'
    }
    
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Batch preload multiple images
export const preloadImages = async (imageSources, priority = 'low') => {
  const promises = imageSources.map(src => preloadImage(src, priority))
  return Promise.allSettled(promises)
}

// Create responsive image sources
export const createResponsiveImageSrc = (baseSrc, width) => {
  const extension = baseSrc.split('.').pop()
  const baseName = baseSrc.replace(`.${extension}`, '')
  
  // Generate different sizes for responsive loading
  if (width <= 480) return `${baseName}-mobile.${extension}`
  if (width <= 768) return `${baseName}-tablet.${extension}`
  return baseSrc
}
