import HomeHeader from './HomeHeader'
import { useState, useRef, useCallback, useEffect, useMemo, memo } from 'react'
import { useIntelligentImageLoading, useImagePerformance } from '../hooks/useImageOptimization'
import { imageMemoryManager } from '../utils/memoryManager'
import { preloadImages } from '../utils/imageOptimization'

const Clippit = memo(() => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const { observeImage, handleImageLoad: handleIntelligentLoad, preloadCriticalImages } = useIntelligentImageLoading()
  const { trackImageLoad, trackImageError } = useImagePerformance()
  const imageRefs = useRef(new Map())

  // Image data array - memoized to prevent dependency issues
  const images = useMemo(() => [
    { src: '/clippit-feature-1.png', alt: 'Clippit Feature 1' },
    { src: '/clippit-feature-2.png', alt: 'Clippit Feature 2' },
    { src: '/clippit-feature-3.png', alt: 'Clippit Feature 3' },
    { src: '/clippit-feature-4.png', alt: 'Clippit Feature 4' },
    { src: '/clippit-feature-5.png', alt: 'Clippit Feature 5' },
    { src: '/clippit-feature-6.png', alt: 'Clippit Feature 6' }
  ], [])

  // Preload critical images on mount
  useEffect(() => {
    const criticalImages = images.slice(0, 3).map(img => img.src)
    preloadCriticalImages(criticalImages)
    preloadImages(criticalImages, 'high').catch(() => {})
  }, [preloadCriticalImages, images])

  // Enhanced image load handler with performance tracking
  const handleImageLoad = useCallback((imageId) => {
    const startTime = performance.now()
    
    setLoadedImages(prev => new Set([...prev, imageId]))
    
    handleIntelligentLoad(imageId)
    
    // Track performance
    const loadTime = performance.now() - startTime
    trackImageLoad(imageId, loadTime)
    
    // Cache management
    const imageElement = imageRefs.current.get(imageId)
    if (imageElement) {
      imageMemoryManager.cacheImage(imageElement.src, imageElement)
    }
  }, [handleIntelligentLoad, trackImageLoad])

  // Enhanced error handler for debugging
  const handleImageError = useCallback((imageId, src) => {
    console.error(`❌ Failed to load image ${imageId}: ${src}`)
    trackImageError()
  }, [trackImageError])

  // Image ref callback for Intersection Observer
  const setImageRef = useCallback((element, imageId) => {
    if (element) {
      imageRefs.current.set(imageId, element)
      observeImage(element)
      element.dataset.imageId = imageId
    }
  }, [observeImage])

  return (
    <div className="min-h-screen bg-black text-red-600">
      <HomeHeader />
      
      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        
        {/* Project Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-full max-w-4xl">
            <h1 className="text-6xl font-bold font-martian text-red-600 text-center">Clippit</h1>
          </div>
        </div>

        {/* Project Description */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-4xl">
            <p className="text-xl text-red-400 font-wix leading-relaxed text-center">
              A powerful, modern Chrome extension for URL shortening, QR code generation, and link management.
            </p>
          </div>
        </div>

        {/* Gallery - 6 images layout: 3 on top row, 3 on bottom row */}
        <div className="space-y-8">
          
          {/* First Row - 3 images */}
          <div className="grid grid-cols-3 gap-16">
            {images.slice(0, 3).map((image, index) => {
              const imageId = index.toString()
              const isLoaded = loadedImages.has(imageId)
              return (
                <div key={imageId} className="relative">
                  {/* Loading Skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-red-900/20 animate-pulse rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img 
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    ref={(el) => setImageRef(el, imageId)}
                    className="w-full h-72 object-contain rounded-xl"
                    style={{ userSelect: 'none' }}
                    onLoad={() => handleImageLoad(imageId)}
                    onError={() => handleImageError(imageId, image.src)}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 pointer-events-none select-none" />
                </div>
              )
            })}
          </div>

          {/* Second Row - 3 images */}
          <div className="grid grid-cols-3 gap-16">
            {images.slice(3, 6).map((image, index) => {
              const imageId = (index + 3).toString()
              const isLoaded = loadedImages.has(imageId)
              return (
                <div key={imageId} className="relative">
                  {/* Loading Skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-red-900/20 animate-pulse rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img 
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    ref={(el) => setImageRef(el, imageId)}
                    className="w-full h-72 object-contain rounded-xl"
                    style={{ userSelect: 'none' }}
                    onLoad={() => handleImageLoad(imageId)}
                    onError={() => handleImageError(imageId, image.src)}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 pointer-events-none select-none" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-16 text-center">
          <p className="text-xs text-red-400/60">
            © 2025 Prakhar Porwal. All rights reserved. Unauthorized use prohibited.
          </p>
        </div>

      </div>
    </div>
  )
})

Clippit.displayName = 'Clippit'

export default Clippit
