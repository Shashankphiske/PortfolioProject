import React from 'react'
import myimg from "../assets/myimg.jpg"

const Hero = () => {
  return (
    <div className='flex items-center justify-between w-full lg:mt-38'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col justify-center lg:ml-20'>
                <h1 className='lg:text-[4vw] tracking-tight font-thin text-white'>Shashank Phiske</h1>
                <span className='lg:mt-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-[2vw] text-transparent'>Full Stack Developer</span>
                <p className='tracking-wide lg:text-[1.1vw] text-gray-300 pr-5 mt-5'>Creative and passionate software developer with a strong dedication to programming and problem solving. A fast learner who thrives on challenges, consistently seeking innovative solutions. Highly disciplined and goal oriented, committed to deliver quality results through hard work and perseverance.</p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 '>
            <div className='flex justify-end items-center lg:mr-20'>
                <img src={myimg} alt="" className='h-[30vw] rounded-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Hero;