
import { ExternalLink } from 'lucide-react'
import HomeHeader from './HomeHeader'
import { useState, useRef, useCallback, useEffect, useMemo, memo } from 'react'
import { useIntelligentImageLoading, useImagePerformance } from '../hooks/useImageOptimization'
import { imageMemoryManager } from '../utils/memoryManager'
import { preloadImages } from '../utils/imageOptimization'

const CheckIt = memo(() => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const { observeImage, handleImageLoad: handleIntelligentLoad, preloadCriticalImages } = useIntelligentImageLoading()
  const { trackImageLoad, trackImageError } = useImagePerformance()
  const imageRefs = useRef(new Map())

  const images = useMemo(() => [
    { src: '/checkit-feature-1.png', alt: 'CheckIt Feature 1' },
    { src: '/checkit-feature-2.png', alt: 'CheckIt Feature 2' },
    { src: '/checkit-feature-3.png', alt: 'CheckIt Feature 3' },
    { src: '/checkit-feature-4.png', alt: 'CheckIt Feature 4' },
    { src: '/checkit-feature-5.png', alt: 'CheckIt Feature 5' },
    { src: '/checkit-feature-6.png', alt: 'CheckIt Feature 6' }
  ], [])

  useEffect(() => {
    const criticalImages = ['/Checkit Login.png', ...images.slice(0, 3).map(img => img.src)]
    preloadCriticalImages(criticalImages)
    preloadImages(criticalImages, 'high').catch(() => {})
  }, [preloadCriticalImages, images])

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
      
     
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl space-y-4 sm:space-y-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-martian text-red-600">CheckIt</h1>
            <a 
              href="https://chcekit.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-900 hover:bg-red-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors group"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-red-300" />
              <span className="text-red-400 group-hover:text-red-300 font-wix font-medium text-sm sm:text-base">View Live</span>
            </a>
          </div>
        </div>

       
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="w-full max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl text-red-400 font-wix leading-relaxed text-center px-4">
              CheckIt is a clean, powerful Todo PWA built with React. Designed for speed, simplicity, and offline-first productivity.
            </p>
          </div>
        </div>

       
       
        <div className="mb-12 md:mb-16 relative">
          {!loadedImages.has('main') && (
            <div className="absolute inset-0 bg-red-900/20 animate-pulse rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src="/Checkit Login.png" 
            alt="CheckIt Project Screenshot" 
            loading="lazy"
            decoding="async"
            ref={(el) => setImageRef(el, 'main')}
            className={`w-full h-auto object-contain rounded-xl transition-opacity duration-500 ${
              loadedImages.has('main') ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad('main')}
            onError={() => trackImageError()}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{ userSelect: 'none' }}
          />
        </div>

        
        <div className="space-y-6 md:space-y-8">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
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
                    className={`w-full h-32 sm:h-40 md:h-48 object-contain rounded-xl transition-opacity duration-500 ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
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
                    className={`w-full h-32 sm:h-40 md:h-48 object-contain rounded-xl transition-opacity duration-500 ${
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
        </div>        {/* Copyright Notice */}
        <div className="mt-16 text-center">
          <p className="text-xs text-red-400/60">
            © 2025 Prakhar Porwal. All rights reserved. Unauthorized use prohibited.
          </p>
        </div>

      </div>
    </div>
  )
})

CheckIt.displayName = 'CheckIt'

export default CheckIt
