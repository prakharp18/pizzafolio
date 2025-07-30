import HomeHeader from './HomeHeader'
import { useEffect, useState } from 'react'

export default function GuessworkProject() {
  const [visibleImages, setVisibleImages] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages(prev => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      { threshold: 0.2 }
    )
   
    const images = document.querySelectorAll('[data-fade-in]')
    images.forEach(img => observer.observe(img))

    return () => observer.disconnect()
  }, [])
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
            <div className="relative">
              <img 
                src="/guesswork-feature-1.jpg" 
                alt="Guesswork Feature 1" 
                className={`w-full h-48 object-contain rounded-xl transition-all duration-700 ${
                  visibleImages.has('0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-fade-in
                data-index="0"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
            <div className="relative">
              <img 
                src="/guesswork-feature-2.jpg" 
                alt="Guesswork Feature 2" 
                className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-150 ${
                  visibleImages.has('1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-fade-in
                data-index="1"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
            <div className="relative">
              <img 
                src="/guesswork-feature-3.jpg" 
                alt="Guesswork Feature 3" 
                className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-300 ${
                  visibleImages.has('2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-fade-in
                data-index="2"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
          </div>

          {/* Row 2 - 3 images */}
          <div className="grid grid-cols-3 gap-16">
            <div className="relative">
              <img 
                src="/guesswork-feature-4.jpg" 
                alt="Guesswork Feature 4" 
                className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-100 ${
                  visibleImages.has('3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-fade-in
                data-index="3"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
            <div className="relative">
              <img 
                src="/guesswork-feature-5.jpg" 
                alt="Guesswork Feature 5" 
                className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-250 ${
                  visibleImages.has('4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-fade-in
                data-index="4"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
            <div className="relative">
              <img 
                src="/guesswork-feature-6.jpg" 
                alt="Guesswork Feature 6" 
                className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-400 ${
                  visibleImages.has('5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-fade-in
                data-index="5"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
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
