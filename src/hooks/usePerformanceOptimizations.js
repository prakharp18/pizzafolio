import { useEffect, useCallback } from 'react'
import { imageMemoryManager } from '../utils/memoryManager'

// Custom hook for performance optimizations
export const usePerformanceOptimizations = () => {
  
  // Debounce function for performance optimization
  const debounce = useCallback((func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }, [])

  // Throttle function for scroll/resize events
  const throttle = useCallback((func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }, [])

  // Memory cleanup on route change
  const cleanupMemory = useCallback(() => {
    // Cleanup unused cached images
    imageMemoryManager.cleanupUnusedImages()
    
    // Force garbage collection if available (development)
    if (window.gc && import.meta.env.DEV) {
      window.gc()
    }
    
    // Clear any pending timers
    const highestTimeoutId = setTimeout(() => {}, 0)
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i)
    }
  }, [])

  // Preload next route's critical resources
  const preloadRouteResources = useCallback((routeName) => {
    const routeResources = {
      '/projects/lockedin': ['/LockIn.png', '/Work.png', '/Break.png'],
      '/projects/checkit': ['/Checkit Login.png', '/checkit-feature-1.png'],
      '/projects/aperture-log': ['/aperture-landscape-1.jpg', '/aperture-landscape-2.jpg'],
      '/contact': ['/profile-image.jpg']
    }

    const resources = routeResources[routeName]
    if (resources) {
      resources.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }
  }, [])

  // Set up performance observers
  useEffect(() => {
    // Performance observer for loading metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', {
              domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
              loadComplete: entry.loadEventEnd - entry.loadEventStart
            })
          }
        })
      })
      
      observer.observe({ entryTypes: ['navigation'] })
      
      return () => observer.disconnect()
    }
  }, [])

  return {
    debounce,
    throttle,
    cleanupMemory,
    preloadRouteResources
  }
}

// Hook for monitoring memory usage
export const useMemoryMonitor = () => {
  useEffect(() => {
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = performance.memory
        const memoryInfo = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
        }
        
        // Log warning if memory usage is high
        if (memoryInfo.used / memoryInfo.limit > 0.8) {
          console.warn('High memory usage detected:', memoryInfo)
          imageMemoryManager.cleanupUnusedImages()
        }
      }
    }

    const interval = setInterval(checkMemory, 30000) // Check every 30 seconds
    return () => clearInterval(interval)
  }, [])
}
