import { Github, Linkedin, Instagram, Smartphone, Laptop } from "lucide-react"
import { memo, useState, useEffect } from 'react'

// Simple Analog Clock Component
const AnalogClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const secondAngle = (time.getSeconds() * 6) - 90
  const minuteAngle = (time.getMinutes() * 6) - 90
  const hourAngle = ((time.getHours() % 12) * 30 + time.getMinutes() * 0.5) - 90

  return (
    <div className="relative w-16 h-16">
      {/* Clock face */}
      <div className="w-full h-full border-2 border-red-600 rounded-full bg-black relative">
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-red-600"
            style={{
              top: '2px',
              left: '50%',
              transformOrigin: '50% 30px',
              transform: `translateX(-50%) rotate(${i * 30}deg)`
            }}
          />
        ))}
        
        {/* Hour hand */}
        <div
          className="absolute w-0.5 h-4 bg-red-600 rounded"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: '50% 100%',
            transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`
          }}
        />
        
        {/* Minute hand */}
        <div
          className="absolute w-0.5 h-6 bg-red-500 rounded"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: '50% 100%',
            transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`
          }}
        />
        
        {/* Second hand */}
        <div
          className="absolute w-px h-6 bg-red-400 rounded"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: '50% 100%',
            transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`
          }}
        />
        
        {/* Center dot */}
        <div className="absolute w-1 h-1 bg-red-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  )
}

const MobileConstructionScreen = memo(() => {
  return (
    <div className="min-h-screen bg-black text-red-600 flex flex-col items-center justify-center px-8 relative">
      
      {/* Analog Clock - Top Left */}
      <div className="absolute top-6 left-6">
        <AnalogClock />
      </div>
      
      <div className="flex flex-col items-center text-center space-y-12 max-w-md">
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-pathway font-bold tracking-wide">Directed by</span>
          </div>
          <div>
            <span className="text-4xl font-montecarlo font-bold italic">Pizzat</span>
          </div>
        </div>

        {/* Cute Sleeping Cat Animation */}
        <div className="flex justify-center items-center">
          <img 
            src="/cat.gif" 
            alt="Cute black kitten sleeping"
            className="w-40 h-32 object-contain"
            style={{
              backgroundColor: 'black',
              mixBlendMode: 'screen',
              filter: 'brightness(1.1) contrast(1.2)'
            }}
            onError={(e) => {
              console.error('Failed to load cat.gif:', e)
              e.target.style.display = 'none'
            }}
            onLoad={() => console.log('Cat GIF loaded successfully')}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl text-red-400 font-wix">
              Developer is snoozing
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 text-red-500">
                <Smartphone className="w-6 h-6" />
                <span className="text-sm font-wix">Mobile</span>
              </div>
              <div className="text-red-400">
                <span className="text-xl">→</span>
              </div>
              <div className="flex items-center space-x-2 text-red-400">
                <Laptop className="w-6 h-6" />
                <span className="text-sm font-wix">Desktop</span>
              </div>
            </div>
            
            <p className="text-sm text-red-400 font-wix leading-relaxed">
              This portfolio is optimized for desktop viewing. 
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <p className="text-sm text-red-500 font-wix font-medium">
            Follow me on:
          </p>
          
          <div className="flex space-x-8 items-center justify-center">
            <a 
              href="https://instagram.com/pizzat25_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:text-red-400 transition-colors group"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-xs font-wix">Instagram</span>
            </a>
            
            <a 
              href="https://github.com/prakharp18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:text-red-400 transition-colors group"
            >
              <Github className="w-8 h-8" />
              <span className="text-xs font-wix">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/pporwal25/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 hover:text-red-400 transition-colors group"
            >
              <Linkedin className="w-8 h-8" />
              <span className="text-xs font-wix">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-red-900/30">
          <p className="text-xs text-red-400/70 font-wix">
            pporwal2019@gmail.com
          </p>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 w-2 h-2 bg-red-600/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-8 w-1 h-1 bg-red-600/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-8 w-1.5 h-1.5 bg-red-600/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-6 w-2 h-2 bg-red-600/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

    </div>
  )
})

MobileConstructionScreen.displayName = 'MobileConstructionScreen'

export default MobileConstructionScreen
