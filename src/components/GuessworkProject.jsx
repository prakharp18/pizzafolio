import HomeHeader from './HomeHeader'
import { useState } from 'react'

export default function GuessworkProject() {
  const [loadedImages, setLoadedImages] = useState(new Set())

  // Image data array
  const images = [
    { src: '/guesswork-feature-1.jpg', alt: 'Guesswork Feature 1' },
    { src: '/guesswork-feature-2.jpg', alt: 'Guesswork Feature 2' },
    { src: '/guesswork-feature-3.jpg', alt: 'Guesswork Feature 3' },
    { src: '/guesswork-feature-4.jpg', alt: 'Guesswork Feature 4' },
    { src: '/guesswork-feature-5.jpg', alt: 'Guesswork Feature 5' },
    { src: '/guesswork-feature-6.jpg', alt: 'Guesswork Feature 6' }
  ]

  // Handle image load completion
  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]))
  }
  return (
    <div className="min-h-screen bg-black text-red-600">
      <HomeHeader />
      
      <div className="container mx-auto px-8 py-16">
        
        {/* Heading */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-full max-w-4xl">
            <h1 className="text-6xl font-bold font-martian text-red-600 text-left">Guesswork Never Looked This Right</h1>
          </div>
        </div>

        
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-4xl">
            <p className="text-xl text-red-400 font-wix leading-relaxed text-left">
              A visual story of friendship, laughter, and shared experiences, captured through my lens.
            </p>
          </div>
        </div>

        {/* Main Project Video */}
        <div className="mb-16">
          <iframe 
            className="w-full h-96 rounded-xl"
            src="https://www.youtube.com/embed/tPssFgUk6bA?rel=0&modestbranding=1&showinfo=0&controls=1"
            title="Guesswork Never Looked This Right Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        
        <div className="space-y-8">
          {/* Row 1 - 3 images */}
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

          {/* Row 2 - 3 images */}
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
