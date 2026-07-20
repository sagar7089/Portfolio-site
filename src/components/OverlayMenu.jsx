import React from 'react'

import {AnimatePresence, easeIn, motion} from "framer-motion"
import { X } from 'lucide-react'

const OverlayMenu = ({isOpen,onClose}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%"


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
        className='fixed inset-0 z-50 flex justify-center items-center'
        initial ={{clipPath:`circle(0% at ${origin})`}}
        animate ={{clipPath:`circle(150% at ${origin})`}}
        exit ={{clipPath:`circle(0% at ${origin})`}}
        transition={{duration:0.7 ,ease:[0.4,0,0.2,1]}}

        style={{backgroundColor: "rgba(0,0,0,0.95)"}}
        >


          <button onClick={onClose} className='
          absolute top-6 right-6 text-white text-3xl'>
            <X />
          </button>


          <ul className='space-y-6'>
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Contact",
            ].map((item,index)=>{
              return (
                <motion.li key={index}
                initial={{ opacity:0,y:20}} 
                animate={{
                  opacity: 1,y :0
                }}
                transition={{delay:0.3 + index * 0.1}}
                >
                  <a className='transition-colors duration:300 font-semibold text-4xl text-white hover:text-pink-400' href={`#${item.toLowerCase()}`} onClick={onClose}>
                    {item}
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OverlayMenu