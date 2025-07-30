
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { memo, useEffect } from 'react'
import HomeHeader from "./components/HomeHeader"
import MainClock from "./components/MainClock"
import LockedIn from "./components/LockedIn"
import CheckIt from "./components/CheckIt"
import GuessworkProject from "./components/GuessworkProject"
import Contact from "./components/Contact"
import ApertureLog from "./components/ApertureLog"
import DeviceWrapper from "./components/DeviceWrapper"
import { imageMemoryManager } from './utils/memoryManager'
import { usePerformanceOptimizations, useMemoryMonitor } from './hooks/usePerformanceOptimizations'

// Home Page Component with memoization for performance
const HomePage = memo(() => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <HomeHeader />
      <MainClock />
    </div>
  )
})

HomePage.displayName = 'HomePage'

function App() {
  // Initialize performance optimizations
  const { cleanupMemory } = usePerformanceOptimizations()
  
  // Monitor memory usage
  useMemoryMonitor()

  // Global memory management and cleanup
  useEffect(() => {
    // Cleanup memory on app unmount
    return () => {
      cleanupMemory()
      imageMemoryManager.clearCache()
    }
  }, [cleanupMemory])

  return (
    <DeviceWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/lockedin" element={<LockedIn />} />
          <Route path="/projects/checkit" element={<CheckIt />} />
          <Route path="/projects/GuessworkNeverLookedThisRight" element={<GuessworkProject />} />
          <Route path="/projects/aperture-log" element={<ApertureLog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </DeviceWrapper>
  )
}

export default App
