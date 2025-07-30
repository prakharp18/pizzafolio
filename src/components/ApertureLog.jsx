import { ExternalLink } from 'lucide-react'
import HomeHeader from './HomeHeader'
import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'
import { useIntelligentImageLoading, useImagePerformance } from '../hooks/useImageOptimization'
import { imageMemoryManager } from '../utils/memoryManager'
import { preloadImages } from '../utils/imageOptimization'

const ApertureLog = memo(() => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const { observeImage, handleImageLoad: handleIntelligentLoad, preloadCriticalImages } = useIntelligentImageLoading()
  const { trackImageLoad, trackImageError } = useImagePerformance()
  const imageRefs = useRef(new Map())

  // Image data arrays - memoized to prevent dependency issues
  const landscapeImages = useMemo(() => [
    { src: '/aperture-landscape-1.jpg', alt: 'Aperture Landscape 1' },
    { src: '/aperture-landscape-2.jpg', alt: 'Aperture Landscape 2' },
    { src: '/aperture-landscape-3.jpg', alt: 'Aperture Landscape 3' }
  ], [])

  const portraitImages = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    src: `/aperture-photo-${i + 1}.jpg`,
    alt: `Aperture Photo ${i + 1}`
  })), [])

  // Group portraits into rows of 3 (4 rows total)
  const portraitRows = useMemo(() => {
    const rows = []
    for (let i = 0; i < portraitImages.length; i += 3) {
      rows.push(portraitImages.slice(i, i + 3))
    }
    return rows
  }, [portraitImages])

  // Preload critical images on component mount with enhanced preloading
  useEffect(() => {
    const criticalImages = [...landscapeImages.map(img => img.src), ...portraitImages.slice(0, 3).map(img => img.src)]
    preloadCriticalImages(criticalImages)
    preloadImages(criticalImages, 'high').catch(() => {})
  }, [landscapeImages, portraitImages, preloadCriticalImages])

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
            <h1 className="text-6xl text-center font-bold font-martian text-red-600">Aperture Log</h1>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-16 text-center">
          <p className="text-xl text-red-400 font-wix leading-relaxed max-w-4xl text-center mx-auto">
            An ongoing visual journal — no genre, just frames.
          </p>
        </div>

        {/* Photo Gallery - 3 Landscape + 5 Rows of 3 Portrait */}
        <div className="space-y-20">
          
          {/* Three 16:9 Landscape Images in a Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {landscapeImages.map((image, index) => {
              const imageId = `landscape${index}`
              const isLoaded = loadedImages.has(imageId)
              return (
                <div key={imageId} className="relative">
                  {/* Loading Skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-red-900/20 animate-pulse rounded-xl flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img 
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    ref={(el) => setImageRef(el, imageId)}
                    className={`w-full h-64 object-cover rounded-xl transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ userSelect: 'none' }}
                    onLoad={() => handleImageLoad(imageId)}
                    onError={() => trackImageError()}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 pointer-events-none select-none" />
                </div>
              )
            })}
          </div>

          {/* Portrait Photo Rows */}
          {portraitRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {row.map((image, colIndex) => {
                const globalIndex = rowIndex * 3 + colIndex
                const imageId = globalIndex.toString()
                const isLoaded = loadedImages.has(imageId)
                
                return (
                  <div key={`portrait-${globalIndex}`} className="relative flex justify-center">
                    {/* Loading Skeleton */}
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-red-900/20 animate-pulse rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    <img 
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      ref={(el) => setImageRef(el, imageId)}
                      className={`w-72 h-[512px] object-cover rounded-xl transition-opacity duration-500 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ userSelect: 'none' }}
                      onLoad={() => handleImageLoad(imageId)}
                      onError={() => trackImageError()}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />
                    <div className="absolute inset-0 pointer-events-none select-none" />
                  </div>
                )
              })}
            </div>
          ))}

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

ApertureLog.displayName = 'ApertureLog'

export default ApertureLog