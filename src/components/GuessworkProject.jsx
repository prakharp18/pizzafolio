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

    // Observe all feature images
    const images = document.querySelectorAll('[data-fade-in]')
    images.forEach(img => observer.observe(img))

    return () => observer.disconnect()
  }, [])
  return (
    <div className="min-h-screen bg-black text-red-600">
      {/* Same Header */}
      <HomeHeader />
      
      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        
        {/* Heading Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-full max-w-4xl">
            <h1 className="text-6xl font-bold font-martian text-red-600 text-left">Guesswork Never Looked This Right</h1>
          </div>
        </div>

        {/* Description */}
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
            src="https://www.youtube.com/embed/tPssFgUk6bA"
            title="Guesswork Never Looked This Right Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Features Gallery */}
        <div className="space-y-8">
          {/* Row 1 - 3 images */}
          <div className="grid grid-cols-3 gap-16">
            <img 
              src="/guesswork-feature-1.png" 
              alt="Guesswork Feature 1" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                visibleImages.has('0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="0"
              onClick={() => window.open('/guesswork-feature-1.png', '_blank')}
            />
            <img 
              src="/guesswork-feature-2.png" 
              alt="Guesswork Feature 2" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-150 hover:scale-105 cursor-pointer ${
                visibleImages.has('1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="1"
              onClick={() => window.open('/guesswork-feature-2.png', '_blank')}
            />
            <img 
              src="/guesswork-feature-3.png" 
              alt="Guesswork Feature 3" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-300 hover:scale-105 cursor-pointer ${
                visibleImages.has('2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="2"
              onClick={() => window.open('/guesswork-feature-3.png', '_blank')}
            />
          </div>

          {/* Row 2 - 3 images */}
          <div className="grid grid-cols-3 gap-16">
            <img 
              src="/guesswork-feature-4.png" 
              alt="Guesswork Feature 4" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-100 hover:scale-105 cursor-pointer ${
                visibleImages.has('3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="3"
              onClick={() => window.open('/guesswork-feature-4.png', '_blank')}
            />
            <img 
              src="/guesswork-feature-5.png" 
              alt="Guesswork Feature 5" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-250 hover:scale-105 cursor-pointer ${
                visibleImages.has('4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="4"
              onClick={() => window.open('/guesswork-feature-5.png', '_blank')}
            />
            <img 
              src="/guesswork-feature-6.png" 
              alt="Guesswork Feature 6" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-400 hover:scale-105 cursor-pointer ${
                visibleImages.has('5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="5"
              onClick={() => window.open('/guesswork-feature-6.png', '_blank')}
            />
          </div>

          {/* Row 3 - 2 images (optional 7th and 8th) */}
          <div className="grid grid-cols-3 gap-16">
            <img 
              src="/guesswork-feature-7.png" 
              alt="Guesswork Feature 7" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-200 hover:scale-105 cursor-pointer ${
                visibleImages.has('6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="6"
              onClick={() => window.open('/guesswork-feature-7.png', '_blank')}
            />
            <img 
              src="/guesswork-feature-8.png" 
              alt="Guesswork Feature 8" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-350 hover:scale-105 cursor-pointer ${
                visibleImages.has('7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="7"
              onClick={() => window.open('/guesswork-feature-8.png', '_blank')}
            />
            {/* Empty third column for 2-image row */}
            <div></div>
          </div>
        </div>

      </div>
    </div>
  )
}
