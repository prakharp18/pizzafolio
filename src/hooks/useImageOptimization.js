import { useEffect, useRef, useState } from 'react'

// Custom hook for intelligent image loading
export const useIntelligentImageLoading = (threshold = 0.1, rootMargin = '50px') => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [visibleImages, setVisibleImages] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    // Create intersection observer for viewport detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = entry.target.dataset.imageId
            setVisibleImages(prev => new Set([...prev, imageId]))
          }
        })
      },
      { threshold, rootMargin }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin])

  // Function to observe an image element
  const observeImage = (element) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element)
    }
  }

  // Function to handle image load completion
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]))
  }

  // Function to preload critical images
  const preloadCriticalImages = (imageSources) => {
    imageSources.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }

  return {
    loadedImages,
    visibleImages,
    observeImage,
    handleImageLoad,
    preloadCriticalImages
  }
}

// Custom hook for image performance monitoring
export const useImagePerformance = () => {
  const [metrics, setMetrics] = useState({
    totalImages: 0,
    loadedImages: 0,
    failedImages: 0,
    averageLoadTime: 0,
    totalLoadTime: 0
  })

  const trackImageLoad = (imageId, loadTime) => {
    setMetrics(prev => ({
      ...prev,
      loadedImages: prev.loadedImages + 1,
      totalLoadTime: prev.totalLoadTime + loadTime,
      averageLoadTime: (prev.totalLoadTime + loadTime) / (prev.loadedImages + 1)
    }))
  }

  const trackImageError = () => {
    setMetrics(prev => ({
      ...prev,
      failedImages: prev.failedImages + 1
    }))
  }

  const setTotalImages = (count) => {
    setMetrics(prev => ({ ...prev, totalImages: count }))
  }

  return {
    metrics,
    trackImageLoad,
    trackImageError,
    setTotalImages
  }
}
