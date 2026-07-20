import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import OverlayMenu from "./OverlayMenu";
import Slogo from "../assets/Slogo.png";
import {Menu} from "lucide-react"

function Navbar() {
  const [hamMenu, setHamMenu] = useState(false);
  const [visibility, setVisibility] = useState(true);


 useEffect(()=>{
  const home = document.querySelector("#home")
  const triggerPoint = home.offsetHeight *0.6
  const handleScroll = () => {
    setVisibility(window.scrollY < triggerPoint)
  };
  


  window.addEventListener("scroll",handleScroll)
  return ()=> window.removeEventListener("scroll",handleScroll)

 },[])

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visibility ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center">
          <img src={Slogo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Sagar
          </div>
        </div>

        <div className="flex gap-5 ">
         {hamMenu ? <></>
          :<button onClick={()=> setHamMenu(true)} >
          <Menu className="text-4xl"/>
         </button>}
        </div>


      <div className="hidden lg:block"  >
       <a href="#contact" className="bg-linear-to-r from-pink-500 to-blue-500 rounded-full text-white px-5 py-2 font-medium shadow-lg hover:opacity-90 transition-opacity duration-300">
        Reach Out
       </a>
      </div>
      </nav>

      <OverlayMenu isOpen={hamMenu} onClose={()=>setHamMenu(false)} />
    </>
  );
}

export default Navbar;
