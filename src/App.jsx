// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeHeader from "./components/HomeHeader"
import MainClock from "./components/MainClock"
import LockedIn from "./components/LockedIn"
import CheckIt from "./components/CheckIt"
import GuessworkProject from "./components/GuessworkProject"
import Contact from "./components/Contact"
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
        <Route path="/projects/checkit" element={<CheckIt />} />
        <Route path="/projects/GuessworkNeverLookedThisRight" element={<GuessworkProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
