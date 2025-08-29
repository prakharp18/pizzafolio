import { memo } from 'react'
import { useDeviceDetection } from '../hooks/useDeviceDetection'

const DeviceWrapper = memo(({ children }) => {
  const { screenSize } = useDeviceDetection()

  // Now we show responsive content for all devices
  // Remove the construction screen fallback
  return (
    <div className={`device-wrapper ${screenSize}`} data-screen-size={screenSize}>
      {children}
    </div>
  )
})

DeviceWrapper.displayName = 'DeviceWrapper'

export default DeviceWrapper
