import { useEffect, useState } from 'react'

// Custom hook for scroll-triggered fade-in animations
export function useFadeInOnScroll() {
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

  return visibleImages
}

// Utility function to get fade-in classes
export function getFadeInClasses(index, visibleImages, delay = 0) {
  const delayClass = delay > 0 ? `delay-${delay}` : ''
  const baseClasses = 'transition-all duration-700 hover:scale-105 cursor-pointer'
  const fadeClasses = visibleImages.has(index.toString()) 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-8'
  
  return `${baseClasses} ${delayClass} ${fadeClasses}`.trim()
}
