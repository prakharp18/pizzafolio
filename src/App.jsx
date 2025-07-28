// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeHeader from "./components/HomeHeader"
import MainClock from "./components/MainClock"
import LockedIn from "./components/LockedIn"

// Home Page Component
function HomePage() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <HomeHeader />
      <MainClock />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/lockedin" element={<LockedIn />} />
      </Routes>
    </Router>
  )
}

export default App
