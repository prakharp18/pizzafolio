import { Github, Linkedin, Instagram, FileDown } from "lucide-react"
import { Link } from 'react-router-dom'

export default function HomeHeader() {
  return (
    <header className="w-full bg-black text-red-600 font-wix">
      <div className="flex justify-between items-center px-12 py-8">
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
          <a href="https://instagram.com/pizzat25_" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
          <a href="https://github.com/prakharp18" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/pporwal25/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
          <a href="/Prakhar_Resume (2).pdf" download title="Download Resume">
            <FileDown className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>
    </header>
  )
}