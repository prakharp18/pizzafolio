import { Github, Linkedin, Instagram, FileDown, Brain } from "lucide-react"
import { Link } from 'react-router-dom'
import MobileNavigation from './MobileNavigation'

export default function HomeHeader() {
  return (
    <header className="w-full bg-black text-red-600 font-wix">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8">
        
        {/* Mobile Layout (< 640px) */}
        <div className="sm:hidden flex justify-between items-center w-full">
          {/* Mobile Brand */}
          <div className="flex items-center space-x-1">
            <span className="text-lg font-pathway font-bold tracking-wide">Directed by</span>
            <span className="text-xl font-montecarlo font-bold italic">Pizzat</span>
          </div>
          
          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>

        {/* Tablet Layout (640px - 1023px) */}
        <div className="hidden sm:flex lg:hidden justify-between items-center w-full">
          {/* Tablet Brand */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-pathway font-bold tracking-wide">Directed by</span>
            <span className="text-2xl font-montecarlo font-bold italic">Pizzat</span>
          </div>

          {/* Tablet Navigation - Compact */}
          <nav className="flex space-x-4 text-sm font-pathway font-medium">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            
            {/* Simplified Projects for Tablet */}
            <div className="relative group">
              <span className="hover:text-red-400 transition-colors cursor-pointer">Projects</span>
              <div className="absolute top-full right-0 mt-2 w-48 bg-black rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/projects/lockedin" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">LockedIn</Link>
                  <Link to="/projects/checkit" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">CheckIt</Link>
                  <Link to="/projects/clippit" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">Clippit</Link>
                  <Link to="/projects/GuessworkNeverLookedThisRight" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">Guesswork</Link>
                  <Link to="/projects/aperture-log" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">Aperture Log</Link>
                  <Link to="/projects/scores" className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors">Scores</Link>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
          </nav>

          {/* Tablet Social Icons - Reduced */}
          <div className="flex space-x-3 items-center">
            <a href="https://github.com/prakharp18" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/pporwal25/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="/Prakhar_Resume.pdf" download className="hover:text-red-400 transition-colors">
              <FileDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Desktop Layout (1024px+) - Original Design */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Left Navigation */}
          <nav className="flex space-x-6 text-sm font-pathway flex-1 font-medium">
            <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
            
            {/* Projects Dropdown */}
            <div className="relative group">
              <span className="hover:text-red-400 transition-colors cursor-pointer">
                Projects
              </span>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-40 bg-black rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link 
                    to="/projects/lockedin" 
                    className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    LockedIn
                  </Link>
                  <Link 
                    to="/projects/checkit" 
                    className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    CheckIt
                  </Link>
                  <Link 
                    to="/projects/clippit" 
                    className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    Clippit
                  </Link>
                  <Link 
                    to="/projects/GuessworkNeverLookedThisRight" 
                    className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    Guesswork Never Looked This Right
                  </Link>
                  <Link 
                    to="/projects/aperture-log" 
                    className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    Aperture Log
                  </Link>
                  <Link 
                    to="/projects/scores" 
                    className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    Scores
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
          </nav>

          {/* Center Title */}
          <div className="flex items-center justify-center flex-1 text-center space-x-2">
            <span className="text-2xl font-pathway font-bold tracking-wide">Directed by</span>
            <span className="text-3xl font-montecarlo font-bold italic">Pizzat</span>
          </div>

          {/* Right Icons */}
          <div className="flex space-x-5 items-center justify-end flex-1">
            <a href="https://instagram.com/pizzat25_" target="_blank" rel="noopener noreferrer" className="group relative">
              <Instagram className="w-5 h-5 hover:text-red-400 transition-colors" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Instagram</span>
            </a>
            <a href="https://github.com/prakharp18" target="_blank" rel="noopener noreferrer" className="group relative">
              <Github className="w-5 h-5 hover:text-red-400 transition-colors" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/pporwal25/" target="_blank" rel="noopener noreferrer" className="group relative">
              <Linkedin className="w-5 h-5 hover:text-red-400 transition-colors" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/prakharp25/" target="_blank" rel="noopener noreferrer" className="group relative">
              <Brain className="w-5 h-5 hover:text-red-400 transition-colors" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LeetCode</span>
            </a>
            <a href="/Prakhar_Resume.pdf" download className="group relative">
              <FileDown className="w-5 h-5 hover:text-red-400 transition-colors" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Resume</span>
            </a>
          </div>
        </div>
        
      </div>
    </header>
  )
}