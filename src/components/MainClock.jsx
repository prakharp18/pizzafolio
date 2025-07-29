import { useState, useEffect } from 'react'
import { Sun, Moon, MapPin } from 'lucide-react'

export default function MainClock() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [is24Hour, setIs24Hour] = useState(true)
  const [activeTimezone, setActiveTimezone] = useState('Asia/Kolkata')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date, timeZone, format24h = is24Hour) => {
    return date.toLocaleTimeString('en-US', {
      timeZone,
      hour12: !format24h,
      hour: '2-digit',
      minute: '2-digit',
      ...(format24h ? {} : { second: undefined })
    })
  }

  const formatMainTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: activeTimezone,
      hour12: !is24Hour,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const getTimeOfDay = (date, timeZone) => {
    const hour = parseInt(date.toLocaleTimeString('en-US', {
      timeZone,
      hour: '2-digit',
      hour12: false
    }).split(':')[0])
    
    if (hour >= 6 && hour < 18) {
      return { period: 'Day', icon: Sun }
    } else {
      return { period: 'Night', icon: Moon }
    }
  }

  const getCurrentDate = () => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    }
    return currentTime.toLocaleDateString('en-US', options)
  }

  const timezones = [
    { 
      city: 'Tokyo', 
      timezone: 'Asia/Tokyo', 
      utc: 'UTC+9',
      country: 'Japan'
    },
    { 
      city: 'New York', 
      timezone: 'America/New_York', 
      utc: 'UTC-5',
      country: 'USA'
    },
    { 
      city: 'Delhi', 
      timezone: 'Asia/Kolkata', 
      utc: 'UTC+5:30',
      country: 'India'
    },
    { 
      city: 'Paris', 
      timezone: 'Europe/Paris', 
      utc: 'UTC+1',
      country: 'France'
    }
  ]

  const getActiveLocation = () => {
    const activeZone = timezones.find(tz => tz.timezone === activeTimezone)
    return activeZone ? { city: activeZone.city, country: activeZone.country } : { city: 'Delhi', country: 'India' }
  }

  const handleTimezoneClick = (timezone) => {
    setActiveTimezone(timezone)
  }

  return (
    <div className="h-screen bg-black text-red-600 flex items-center justify-center px-8">
      <div className="w-full max-w-7xl">
        
        {/* Main Clock Display */}
        <div className="text-center mb-10">
          <div className="text-9xl font-bold text-red-600 mb-6 font-martian tracking-wider">
            {formatMainTime(currentTime)}
          </div>
          
          <div className="flex justify-between items-center mb-3 px-8">
            <span className="text-sm text-red-400 font-wix">Current</span>
            <div className="flex bg-red-900 rounded-full p-0.5 border border-red-600">
              <button 
                className={`px-3 py-1 rounded-full text-xs font-wix transition-all ${!is24Hour ? 'bg-red-600 text-black' : 'text-red-400 hover:text-red-300'}`}
                onClick={() => setIs24Hour(false)}
              >
                12h
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-xs font-wix transition-all ${is24Hour ? 'bg-red-600 text-black' : 'text-red-400 hover:text-red-300'}`}
                onClick={() => setIs24Hour(true)}
              >
                24h
              </button>
            </div>
          </div>
          
          <div className="text-sm text-red-400 font-wix text-center">
            {getCurrentDate()}
          </div>
        </div>

        {/* Location and Quote */}
        <div className="flex justify-between items-start mb-6 px-8">
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-red-500 font-wix">{getActiveLocation().city},</h2>
              <h3 className="text-3xl font-bold text-red-500 font-wix">{getActiveLocation().country}</h3>
            </div>
          </div>
          <div className="text-right text-red-400 font-wix max-w-xs">
            <p className="text-sm italic">"In the IDE of life, be the main class</p>
            <p className="text-sm italic">just don't forget to declare your ‘public static void awesome()’ method."</p>
          </div>
        </div>

        {/* Timezone Cards */}
        <div className="grid grid-cols-4 gap-4 px-8">
          {timezones.map((tz, index) => {
            const timeData = getTimeOfDay(currentTime, tz.timezone)
            const isActive = tz.timezone === activeTimezone
            return (
              <div 
                key={index}
                onClick={() => handleTimezoneClick(tz.timezone)}
                className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 cursor-pointer ${
                  isActive 
                    ? 'bg-red-600 border-red-600 text-black' 
                    : 'bg-black border-red-800 text-red-500 hover:border-red-600'
                }`}
              >
                <div className={`text-xs mb-2 font-wix ${isActive ? 'text-black' : ''}`}>
                  <span className="font-bold">{tz.city}</span>
                  <span className={`ml-2 text-xs ${isActive ? 'opacity-70 text-black' : 'opacity-70'}`}>{tz.utc}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold font-martian tracking-wide ${isActive ? 'text-black' : ''}`}>
                    {formatTime(currentTime, tz.timezone)}
                  </span>
                  <div className={`flex items-center text-xs font-wix ${isActive ? 'text-black' : ''}`}>
                    <timeData.icon className="mr-1 w-4 h-4" />
                    <span className="font-medium">{timeData.period}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
