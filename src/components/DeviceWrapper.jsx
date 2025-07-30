import { memo } from 'react'
import { useDeviceDetection } from '../hooks/useDeviceDetection'
import MobileConstructionScreen from './MobileConstructionScreen'

const DeviceWrapper = memo(({ children }) => {
  const { isMobileOrTablet } = useDeviceDetection()

  // Show mobile construction screen for mobile and tablet devices
  if (isMobileOrTablet) {
    return <MobileConstructionScreen />
  }

  // Show normal content for desktop
  return children
})

DeviceWrapper.displayName = 'DeviceWrapper'

export default DeviceWrapper
