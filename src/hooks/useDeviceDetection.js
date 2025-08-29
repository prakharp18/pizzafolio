import { useState, useEffect } from 'react'

export const useDeviceDetection = () => {
  const [screenSize, setScreenSize] = useState('desktop')
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const userAgent = navigator.userAgent.toLowerCase()
      
      // Enhanced breakpoint detection
      let newScreenSize
      if (width < 640) {
        newScreenSize = 'mobile'
      } else if (width < 1024) {
        newScreenSize = 'tablet'
      } else {
        newScreenSize = 'desktop'
      }
      
      // User agent fallback for better mobile detection
      const mobileRegex = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i
      const tabletRegex = /ipad|android(?!.*mobile)|tablet/i
      
      if (mobileRegex.test(userAgent) && newScreenSize !== 'desktop') {
        newScreenSize = 'mobile'
      } else if (tabletRegex.test(userAgent) && newScreenSize === 'desktop') {
        newScreenSize = 'tablet'
      }
      
      setScreenSize(newScreenSize)
      setIsMobile(newScreenSize === 'mobile')
      setIsTablet(newScreenSize === 'tablet')
      setIsDesktop(newScreenSize === 'desktop')
    }

    // Check on mount
    checkDevice()

    // Check on resize
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return {
    screenSize,
    isMobile,
    isTablet,
    isDesktop,
    isMobileOrTablet: isMobile || isTablet
  }
}
