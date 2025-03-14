import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='fixed flex justify-between items-center w-screen px-[5vw] h-[14vw] md:px-[5vw] md:h-[6vw] lg:h-[5vw]'>
        <Link to="/"><p className='text-white text-[5vw] md:text-[2.4vw] lg:text-[2vw]'>SP</p></Link>
        <div className='flex justify-between items-center gap-3 md:gap-5 lg:gap-10 text-[5vw] md:text-[2.4vw] lg:text-[2vw] text-white'>
            <Link to="https://github.com/Shashankphiske"><FaGithub /></Link>
            <Link to="https://www.instagram.com/shashank_phiske/"><FaInstagram /></Link>
            <Link to="https://www.linkedin.com/in/shashankphiske/"><FaLinkedin /></Link>
            <Link to="https://leetcode.com/u/ShashankPhiske/"><SiLeetcode /></Link>    
        </div>
      
    </div>
  )
}

export default Navbar;