import { useState, useEffect } from 'react'
import { Sun, Moon, MapPin } from 'lucide-react'

export         {/* Cat Gif Section - because why not!  */}
        <div className="flex justify-center mb-6 md:mb-8 bg-black">
          <div className="relative bg-black">
            <img 
              src="/cat.gif" 
              alt="Coding Cat" 
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-2 border-red-600/30 hover:border-red-600 transition-all duration-300 hover:scale-105"
              onError={(e) => {
                console.log('Cat gif failed to load')
                e.target.style.display = 'none'
              }}
              onLoad={() => console.log('Cat gif loaded successfully!')}
            />
            <div className="absolute inset-0 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-300"></div>
          </div>
        </div>

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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    return date.toLocaleTimeString('en-US', {
      timeZone: activeTimezone,
      hour12: !is24Hour,
      hour: '2-digit',
      minute: '2-digit',
      ...(isMobile ? {} : { second: '2-digit' })
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
    <div className="min-h-screen bg-black text-red-600 flex items-center justify-center px-4 md:px-8 py-8 md:py-12">
      <div className="w-full max-w-7xl">
        
         {/* Cat Gif Section - Mobile Only */}
        <div className="flex justify-center mb-6 md:mb-8 sm:hidden">
          <div className="relative bg-black">
           <img 
            src="/cat.gif" 
            alt="Cute black kitten sleeping"
            className="w-32 h-24 object-contain"
            style={{
              backgroundColor: 'black',
              mixBlendMode: 'screen',
              filter: 'brightness(1.1) contrast(1.2)',
              userSelect: 'none'
            }}
              onLoad={() => console.log('Cat gif loaded successfully!')}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className="absolute inset-0 rounded-full bg-black/10 hover:bg-black/20 transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Main Clock Display */}
        <div className="text-center mb-4 md:mb-6 lg:mb-8">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-red-600 mb-3 md:mb-4 lg:mb-6 font-martian tracking-wider">
            {formatMainTime(currentTime)}
          </div>
          
          <div className="flex justify-between items-center mb-2 md:mb-3 px-2 sm:px-4 md:px-8">
            <span className="text-xs md:text-sm text-red-400 font-wix">Current</span>
            <div className="flex bg-red-900 rounded-full p-0.5 border border-red-600">
              <button 
                className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-wix transition-all ${!is24Hour ? 'bg-red-600 text-black' : 'text-red-400 hover:text-red-300'}`}
                onClick={() => setIs24Hour(false)}
              >
                12h
              </button>
              <button 
                className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-wix transition-all ${is24Hour ? 'bg-red-600 text-black' : 'text-red-400 hover:text-red-300'}`}
                onClick={() => setIs24Hour(true)}
              >
                24h
              </button>
            </div>
          </div>
          
          <div className="text-xs md:text-sm text-red-400 font-wix text-center">
            {getCurrentDate()}
          </div>
        </div>

        {/* Location and Quote */}
        <div className="flex flex-row justify-between items-start mb-3 md:mb-4 lg:mb-6 px-2 sm:px-4 md:px-8">
          <div className="flex items-start space-x-2 md:space-x-3">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-500 font-wix">{getActiveLocation().city},</h2>
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-500 font-wix">{getActiveLocation().country}</h3>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs sm:text-xs md:text-sm italic leading-relaxed text-red-400 font-wix">"In the IDE of life, be the main class</p>
            <p className="text-xs sm:text-xs md:text-sm italic leading-relaxed text-red-400 font-wix">just don't forget to declare your </p>
            <p className="text-xs sm:text-xs md:text-sm italic leading-relaxed text-red-400 font-wix">'public static void awesome()' method."</p>
          </div>
        </div>

        {/* Timezone Cards - 2x2 Layout (2 each side) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-2 sm:px-4 md:px-8">
          {timezones.map((tz, index) => {
            const timeData = getTimeOfDay(currentTime, tz.timezone)
            const isActive = tz.timezone === activeTimezone
            return (
              <div 
                key={index}
                onClick={() => handleTimezoneClick(tz.timezone)}
                className={`p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all hover:scale-105 cursor-pointer ${
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
                  <span className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-martian tracking-wide ${isActive ? 'text-black' : ''}`}>
                    {formatTime(currentTime, tz.timezone)}
                  </span>
                  <div className={`flex items-center text-xs font-wix ${isActive ? 'text-black' : ''}`}>
                    <timeData.icon className="mr-1 w-3 h-3 md:w-4 md:h-4" />
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