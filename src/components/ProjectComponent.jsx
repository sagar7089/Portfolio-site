import React from 'react'
import {motion} from "framer-motion"

const ProjectComponent = ({project}) => {
  return (
    <div className='gap-10 h-[90%] flex flex-col items-center justify-center w-full'>
        <motion.h2 className='text-2xl '
        initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.7,delay:0.3}}>{project.title}</motion.h2>
        <div className="img
        shadow-2xl 
        md:h-[55vh]
        h-[50vh] w-[80vw] rounded-2xl overflow-hidden hover:scale-110 transition-transform duration-300">
            <img src={project.image} alt="" className='h-full w-full object-cover' />
        </div>
        <div className="
        md:flex-row 
        links flex flex-col gap-10">
            <a className='text-black bg-white w-40 h-15 justify-center flex items-center border rounded-xl' href={project.githubLink}>GitHub Link</a>
            <a href={project.liveLink} className='text-white  w-40 h-15 justify-center flex items-center border hover:bg-white/10 rounded-xl' >View Project</a>
        </div>
    </div>
  )
}

export default ProjectComponent