import { Github, Linkedin, Instagram, FileDown, Brain } from "lucide-react"
import { memo } from 'react'

const SocialDock = memo(() => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
      <div className="bg-black/90 backdrop-blur-md border border-red-900/30 rounded-xl px-3 py-2 shadow-2xl">
        <div className="flex items-center space-x-4">
          
          <a 
            href="https://instagram.com/pizzat25_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
            title="Instagram"
          >
            <Instagram className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-colors" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Instagram
            </span>
          </a>

          <a 
            href="https://github.com/prakharp18" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
            title="GitHub"
          >
            <Github className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-colors" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </a>

          <a 
            href="https://linkedin.com/in/pporwal25/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-colors" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </a>

          <a 
            href="https://leetcode.com/prakharp25/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
            title="LeetCode"
          >
            <Brain className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-colors" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LeetCode
            </span>
          </a>

          <a 
            href="/Prakhar_Resume.pdf" 
            download 
            className="group relative p-1.5 rounded-lg hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
            title="Resume"
          >
            <FileDown className="w-4 h-4 text-red-600 group-hover:text-red-400 transition-colors" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-red-400 text-xs font-wix px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Resume
            </span>
          </a>

        </div>
      </div>
    </div>
  )
})

SocialDock.displayName = 'SocialDock'

export default SocialDock
