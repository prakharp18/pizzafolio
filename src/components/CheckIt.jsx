import { ExternalLink } from 'lucide-react'
import HomeHeader from './HomeHeader'

export default function CheckIt() {
  return (
    <div className="min-h-screen bg-black text-red-600">
      <HomeHeader />
      
     
      <div className="container mx-auto px-8 py-16">
        
        <div className="flex flex-col items-center mb-8">
          <div className="flex justify-between items-center w-full max-w-4xl">
            <h1 className="text-6xl font-bold font-martian text-red-600">CheckIt</h1>
            <a 
              href="https://chcekit.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-900 hover:bg-red-800 px-6 py-3 rounded-lg transition-colors group"
            >
              <ExternalLink className="w-5 h-5 text-red-400 group-hover:text-red-300" />
              <span className="text-red-400 group-hover:text-red-300 font-wix font-medium">View Live</span>
            </a>
          </div>
        </div>

       
        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-4xl">
            <p className="text-xl text-red-400 font-wix leading-relaxed text-left">
              CheckIt is a clean, powerful Todo PWA built with React. Designed for speed, simplicity, and offline-first productivity.
            </p>
          </div>
        </div>

       
        <div className="mb-16">
          <img src="/Checkit Login.png" alt="CheckIt Project Screenshot" className="w-full h-auto object-contain rounded-xl" />
        </div>

        
        <div className="space-y-8">
         
          <div className="grid grid-cols-3 gap-16">
            <img 
              src="/checkit-feature-1.png" 
              alt="CheckIt Feature 1" 
              className="w-full h-48 object-contain rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => window.open('/checkit-feature-1.png', '_blank')}
            />
            <img 
              src="/checkit-feature-2.png" 
              alt="CheckIt Feature 2" 
              className="w-full h-48 object-contain rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => window.open('/checkit-feature-2.png', '_blank')}
            />
            <img 
              src="/checkit-feature-3.png" 
              alt="CheckIt Feature 3" 
              className="w-full h-48 object-contain rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => window.open('/checkit-feature-3.png', '_blank')}
            />
          </div>


          <div className="grid grid-cols-3 gap-16">
            <img 
              src="/checkit-feature-4.png" 
              alt="CheckIt Feature 4" 
              className="w-full h-48 object-contain rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => window.open('/checkit-feature-4.png', '_blank')}
            />
            <img 
              src="/checkit-feature-5.png" 
              alt="CheckIt Feature 5" 
              className="w-full h-48 object-contain rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => window.open('/checkit-feature-5.png', '_blank')}
            />
            <img 
              src="/checkit-feature-6.png" 
              alt="CheckIt Feature 6" 
              className="w-full h-48 object-contain rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer" 
              onClick={() => window.open('/checkit-feature-6.png', '_blank')}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
