import { useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'

const MobileNavigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setShowProjects(false) // Reset projects submenu when closing
  }

  const closeMenu = () => {
    setIsOpen(false)
    setShowProjects(false)
  }

  const toggleProjects = () => {
    setShowProjects(!showProjects)
  }

  const projects = [
    { name: 'LockedIn', path: '/projects/lockedin' },
    { name: 'CheckIt', path: '/projects/checkit' },
    { name: 'Clippit', path: '/projects/clippit' },
    { name: 'Guesswork Never Looked This Right', path: '/projects/GuessworkNeverLookedThisRight' },
    { name: 'Aperture Log', path: '/projects/aperture-log' },
    { name: 'Scores', path: '/projects/scores' }
  ]

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-lg hover:bg-red-900/20 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-red-600" />
        ) : (
          <Menu className="w-6 h-6 text-red-600" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 lg:hidden">
          <div className="flex flex-col h-full">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-red-900/30">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-pathway font-bold text-red-600">Directed by</span>
                <span className="text-2xl font-montecarlo font-bold italic text-red-600">Pizzat</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-red-900/20 transition-colors"
              >
                <X className="w-6 h-6 text-red-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-6 space-y-8">
              
              <Link 
                to="/" 
                className="text-4xl font-pathway text-red-600 hover:text-red-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>

              {/* Projects with Submenu */}
              <div className="space-y-4">
                <button
                  onClick={toggleProjects}
                  className="flex items-center justify-between w-full text-4xl font-pathway text-red-600 hover:text-red-400 transition-colors"
                >
                  Projects
                  <ChevronRight 
                    className={`w-8 h-8 transition-transform ${showProjects ? 'rotate-90' : ''}`} 
                  />
                </button>
                
                {showProjects && (
                  <div className="pl-6 space-y-4 border-l-2 border-red-900/30">
                    {projects.map((project) => (
                      <Link
                        key={project.path}
                        to={project.path}
                        className="block text-2xl font-wix text-red-400 hover:text-red-300 transition-colors"
                        onClick={closeMenu}
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="text-4xl font-pathway text-red-600 hover:text-red-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>

            </div>

            {/* Footer with Social Links */}
            <div className="p-6 border-t border-red-900/30">
              <p className="text-center text-sm text-red-400/70 font-wix">
                Swipe up to explore projects
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  )
})

MobileNavigation.displayName = 'MobileNavigation'

export default MobileNavigation
