import React from 'react'
import HomeHeader from './HomeHeader'

const Scores = () => {
  return (
    <div className="min-h-screen bg-black text-red-600">
      <HomeHeader />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
       

        {/* Description */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="w-full max-w-4xl">
            <p className="text-base sm:text-lg md:text-xl text-red-400 font-wix leading-relaxed text-center px-4">
              Coming Soon.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Scores
