import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png";
import {TypeAnimation} from "react-type-animation"

const Home = () => {
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
    <section
      id="home"
      className="flex items-center justify-center w-full h-screen relative  bg-black"
    >
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse 
    
      "
        ></div>
        <div
          className="absolute bottom-0 right-0
      w-[70vw] sm:w-[50vw] md:w-[40vw]
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse delay-500
    
      "
        ></div>
      </div>

      <div className="relative z-10 w-[90%] h-full flex items-center justify-center gap-5">
        <div className=" lg:w-[70vw] lg:items-start lg:text-start  flex flex-col gap-5 w-[80%] text-center items-center">
          <p className="lg:text-2xl"><TypeAnimation 
          sequence={[
            "Web Deveoper",
            1000,
            "Software Developer",
            1000,
            "Front End Developer",
            1000
          ]}
          repeat={Infinity}/></p>
          <h1>
            <span className=" lg:text-5xl font-bold text-3xl bg-linear-to-r from-[#00bf8f] via-[#1cd8d2] to-[#302b63] bg-clip-text text-transparent">Hello,I'm <br /></span>
            <span className="lg:text-7xl font-bold text-5xl">Sagar Bisht</span>
          </h1>
          <p className="text-[#ccd6d8]">
            I turn complex ideas into seamless, high-impact web experiences — <br />
            building modern, scalable, <br /> and lightning-fast applications that make
            a difference.
          </p>
          <div className="flex gap-5">
            <a href="#projects" className="inline-block bg-linear-to-r from-[#00bf8f] via-[#1cd8d2] to-[#302b63] rounded-full text-white px-5 py-2 lg:p-4 font-medium shadow-lg transition-transform duration-300 hover:scale-110">View My Projects</a>
            <a href="" className="inline-block text-black bg-white rounded-full  px-5 py-2 font-medium shadow-lg transition-transform duration-300 lg:py-4 hover:scale-110">My Resume</a>
          </div>
          <div className="flex gap-3 ">
            {socialHandles.map((item,idx)=>{
              return(
                <a key={idx} href={item.link} target="_blank" className="list-none text-3xl transition-transform duration-300 hover:scale-125 opacity-80">{item.icon}</a>
              )
            })}
          </div>
        </div>
        <div className="hidden lg:block w-[35%]">
          <img src={avator} alt="logo" className="w-[100%] h-[90%]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
