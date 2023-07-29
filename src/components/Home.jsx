import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#D2443A] } '>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mark Anthony Fabor</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>It's awesome to create web applications that make life easier and more enjoyable for users. With a solid foundation in HTML, CSS, JavaScript.I build sleek and intuitive interfaces that captivate users from the get-go.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D2443A] hover:border-[#D2443A] '>View Work <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
        </div>

      </div>
    
    
    </div>
  )
}

export default home