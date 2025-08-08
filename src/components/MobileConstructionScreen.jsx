import { Github, Linkedin, Instagram, Smartphone, Laptop, FileDown, Brain } from "lucide-react"
import { memo } from 'react'
import SocialDock from './SocialDock'

const MobileConstructionScreen = memo(() => {
  return (
    <div className="min-h-screen bg-black text-red-600 flex flex-col items-center justify-center px-8 relative">
      
      <div className="flex flex-col items-center text-center space-y-8 max-w-md">
        
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
            className="w-32 h-24 object-contain"
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

        {/* Cool Social Dock */}
        <div className="flex justify-center">
          <div className="bg-black/90 backdrop-blur-md border border-red-900/30 rounded-xl px-4 py-3 shadow-2xl">
            <div className="flex items-center space-x-4">
              
              <a 
                href="https://instagram.com/pizzat25_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors" />
              </a>

              <a 
                href="https://github.com/prakharp18" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors" />
              </a>

              <a 
                href="https://linkedin.com/in/pporwal25/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors" />
              </a>

              <a 
                href="https://leetcode.com/prakharp25/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
                title="LeetCode"
              >
                <Brain className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors" />
              </a>

              <a 
                href="/Prakhar_Resume (2).pdf" 
                download 
                className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
                title="Resume"
              >
                <FileDown className="w-5 h-5 text-red-600 group-hover:text-red-400 transition-colors" />
              </a>

            </div>
          </div>
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
