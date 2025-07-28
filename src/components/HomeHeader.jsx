import { Github, Linkedin, Instagram, FileDown } from "lucide-react"

export default function HomeHeader() {
  return (
    <header className="w-full bg-black text-red-600 font-wix">
      <div className="flex justify-between items-center px-12 py-8">
        {/* Left Navigation */}
        <nav className="flex space-x-6 text-sm font-pathway flex-1 font-medium">
          <a href="/" className="hover:text-red-400 transition-colors">Home</a>
          <a href="/projects" className="hover:text-red-400 transition-colors">Films</a>
          <a href="/contact" className="hover:text-red-400 transition-colors">Contact</a>
        </nav>

        {/* Center Title */}
        <div className="flex items-center justify-center flex-1 text-center space-x-2">
          <span className="text-2xl font-pathway font-bold tracking-wide">Directed by</span>
          <span className="text-3xl font-montecarlo font-bold italic">Pizzat</span>
        </div>

        {/* Right Icons */}
        <div className="flex space-x-5 items-center justify-end flex-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
          <a href="/resume.pdf" download title="Download Resume">
            <FileDown className="w-5 h-5 hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>
    </header>
  )
}
