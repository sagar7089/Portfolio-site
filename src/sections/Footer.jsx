import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import {motion} from  "framer-motion"

function Footer() {
  const socialHandles = [
    {
      icon: <FaSquareXTwitter />,
      link: "https://x.com/yourusername",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sagar-bisht-a4a086286/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/sagar7089",
    },
  ];

  return (
    <section className='relative w-full h-[30vh] bg-black md:h-[50vh] flex flex-col justify-center'>

       <div
          className="absolute bottom-32 left-32
      w-[70vw] sm:w-[50vw] md:w-[20vw]
      h-[70vw] sm:h-[50vw] md:h-[20vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse 
    
      "
        ></div>

      <motion.div 
      initial={{y:20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.7,delay:0.3}}
      className='gap-1 flex flex-col text-center items-center justify-center'>
        <h2 className='text-5xl font-extrabold'>Sagar Bisht</h2>
        <div className='mt-5 h-1 w-30 bg-linear-to-r to-[#00bf8f] via-[#1cd8d2] from-[#302b63] rounded-fully'></div>
        <div className="flex gap-3 mt-5 ">
            {socialHandles.map((item,idx)=>{
              return(
                <a href={item.link} key={idx} target="_blank" className="list-none text-3xl transition-transform duration-300 hover:scale-125 opacity-80">{item.icon}</a>
              )
            })}
            </div>
            <span>“Success is when preparation meets opportunity.”</span>
            <br />
            <span className='text-[#ccd6d8]'>© 2026 Sagar Bisht. All rights reserved.</span>
      </motion.div>
    </section>
  )
}

export default Footer