import { ExternalLink } from 'lucide-react'
import HomeHeader from './HomeHeader'
import { useEffect, useState } from 'react'

export default function LockedIn() {
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
            <img 
              src="/Work.png" 
              alt="LockedIn Feature 1" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                visibleImages.has('0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="0"
              onClick={() => window.open('/Work.png', '_blank')}
            />
            <img 
              src="/Break.png" 
              alt="LockedIn Feature 2" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-150 hover:scale-105 cursor-pointer ${
                visibleImages.has('1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="1"
              onClick={() => window.open('/Break.png', '_blank')}
            />
            <img 
              src="/Writing.png" 
              alt="LockedIn Feature 3" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-300 hover:scale-105 cursor-pointer ${
                visibleImages.has('2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="2"
              onClick={() => window.open('/Writing.png', '_blank')}
            />
          </div>

        
          <div className="grid grid-cols-3 gap-16">
            <img 
              src="/Focus.png" 
              alt="LockedIn Feature 4" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-100 hover:scale-105 cursor-pointer ${
                visibleImages.has('3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="3"
              onClick={() => window.open('/Focus.png', '_blank')}
            />
            <img 
              src="/Random.png" 
              alt="LockedIn Feature 5" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-250 hover:scale-105 cursor-pointer ${
                visibleImages.has('4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="4"
              onClick={() => window.open('/Random.png', '_blank')}
            />
            <img 
              src="/Statistics.png" 
              alt="LockedIn Feature 6" 
              className={`w-full h-48 object-contain rounded-xl transition-all duration-700 delay-400 hover:scale-105 cursor-pointer ${
                visibleImages.has('5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-fade-in
              data-index="5"
              onClick={() => window.open('/Statistics.png', '_blank')}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
