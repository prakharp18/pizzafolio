import { ExternalLink } from 'lucide-react'
import HomeHeader from './HomeHeader'
import { useState } from 'react'

export default function LockedIn() {
  const [loadedImages, setLoadedImages] = useState(new Set())

  // Image data array
  const images = [
    { src: '/Work.png', alt: 'LockedIn Feature 1' },
    { src: '/Break.png', alt: 'LockedIn Feature 2' },
    { src: '/Writing.png', alt: 'LockedIn Feature 3' },
    { src: '/Focus.png', alt: 'LockedIn Feature 4' },
    { src: '/Random.png', alt: 'LockedIn Feature 5' },
    { src: '/Statistics.png', alt: 'LockedIn Feature 6' }
  ]

  // Handle image load completion
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]))
  }
  return (
    <div className="min-h-screen bg-black text-red-600">
      <HomeHeader />
      
      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        
        
        <div className="flex flex-col items-center mb-8">
          <div className="flex justify-between items-center w-full max-w-4xl">
            <h1 className="text-6xl font-bold font-martian text-red-600">LockedIn</h1>
            <a 
              href="http://lockedln.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-900 hover:bg-red-800 px-6 py-3 rounded-lg transition-colors group"
            >
              <ExternalLink className="w-5 h-5 text-red-400 group-hover:text-red-300" />
              <span className="text-red-400 group-hover:text-red-300 font-wix font-medium">View Live</span>
            </a>
          </div>
        </div>

      
        <div className="mb-16 text-center">
          <p className="text-xl text-red-400 font-wix leading-relaxed max-w-4xl mx-auto">
            LockedIn is a free, lightweight focus timer app designed for distraction-free deep work, built for desktop browsers.
          </p>
        </div>

        {/* Main Project Snapshot */}
        <div className="mb-16">
          <img src="/LockIn.png" alt="LockedIn Project Screenshot" className="w-full h-auto object-contain rounded-xl" />
        </div>

        {/* Gallery */}
        <div className="space-y-8">
          
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
                    className={`w-full h-48 object-contain rounded-xl transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ userSelect: 'none' }}
                    onLoad={() => handleImageLoad(imageId)}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="absolute inset-0 pointer-events-none select-none" />
                </div>
              )
            })}
          </div>

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
                    className={`w-full h-48 object-contain rounded-xl transition-opacity duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ userSelect: 'none' }}
                    onLoad={() => handleImageLoad(imageId)}
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
}
