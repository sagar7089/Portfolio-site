import React from 'react'
import {motion} from "framer-motion"
import {FaReact,FaHtml5,FaJs} from "react-icons/fa"
import {SiTypescript ,SiTailwindcss,SiFastapi,SiMongodb} from "react-icons/si"
import {DiNodejsSmall} from "react-icons/di"
import { IoLogoCss3 } from "react-icons/io";

function Skills() {
  const skills = [
    { icon: <FaHtml5  />, name: "Html" },
    { icon: <IoLogoCss3  />, name: "Css" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];


  return (
   <section id='skills' className='relative overflow-x-hidden flex justify-center items-center text-center h-screen w-full bg-black text-amber-50 md:h-[50vh]'>

       

    <div>
      <motion.h2 className="h-15 text-5xl font-bold  bg-linear-to-r to-[#302b63] via-[#00bf8f] from-[#1cd8d2] bg-clip-text text-transparent"
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1 ,y:0}}
      transition={{duraton:0.5,delay:0.2}}
      >
        My Skills
      </motion.h2>
      <motion.p className="mb-10"
       initial={{opacity:0,y:-20}}
      whileInView={{opacity:1 ,y:0}}
      transition={{duraton:0.5,delay:0.3}}
      >
        Modern Applications | Modern Technologies
      </motion.p>  
      <div  className=' w-[100vw] flex-wrap gap-35 flex items-center justify-center mt-5 '>
      {skills.map((item,idx)=>{
        return (
        <motion.div 
        initial={{opacity:0,y:-20}}
      whileInView={{opacity:1 ,y:0}}
      transition={{duraton:0.5,delay:0.5}}
        key={item.name} className='flex flex-col items-center gap-1 text-[#1cd8d2]'>
          <span className='text-6xl colo' >{item.icon}</span>
          <p>{item.name}</p>
        </motion.div>
      )})}
    </div>
    </div>
    
   </section>
  )
}

export default Skills