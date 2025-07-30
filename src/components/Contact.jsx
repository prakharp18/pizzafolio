import { Github, Linkedin } from 'lucide-react'
import HomeHeader from './HomeHeader'

export default function Contact() {

  return (
    <div className="min-h-screen bg-black text-red-600">
      <HomeHeader />
      
      
      <div className="container mx-auto px-8 py-16">
        
        
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold font-martian text-red-600 mb-6">Contact</h1>
        
        </div>

        {/* Contact Content */}
        <div className="flex items-center justify-center gap-16 max-w-6xl mx-auto">
          
          {/* Left Side - Contact Information */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-lg font-bold font-martian text-red-600 mb-6">Artist/Developer</h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div>
                <p className="text-xs text-red-400 font-wix">pporwal2019@gmail.com</p>
              </div>

              <div>
                <p className="text-xs text-red-400 font-wix">Available for remote work</p>
              </div>

              <div>
                <p className="text-xs text-red-400 font-wix">Based in Delhi</p>
              </div>
            </div>
          </div>

          {/* Right Side - Portrait */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="/profile-image.jpg" 
                alt="Prakhar Porwal - Artist/Filmmaker" 
                className="w-96 h-96 object-cover rounded-2xl"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 pointer-events-none select-none" />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}
