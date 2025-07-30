import { useState, useEffect } from 'react'

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const userAgent = navigator.userAgent.toLowerCase()
      
      // Check for mobile devices
      const mobileRegex = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i
      const tabletRegex = /ipad|android(?!.*mobile)|tablet/i
      
      const isMobileDevice = width <= 768 || mobileRegex.test(userAgent)
      const isTabletDevice = (width > 768 && width <= 1024) || tabletRegex.test(userAgent)
      
      setIsMobile(isMobileDevice && !isTabletDevice)
      setIsTablet(isTabletDevice)
      setIsDesktop(!isMobileDevice && !isTabletDevice)
    }

    // Check on mount
    checkDevice()

    // Check on resize
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return {
    isMobile,
    isTablet,
    isDesktop,
    isMobileOrTablet: isMobile || isTablet
  }
}
