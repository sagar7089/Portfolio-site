import React from "react";
import profile from "../assets/profile.jpeg";

function About() {
  return (
    <section
      className="overflow-x-hidden min-h-screen 
      inset-0 w-full bg-black relative flex justify-center "
      id="about"
    >
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
          className="absolute bottom-0 -right-10
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
      <div className="my-10 md:items-start main w-[80%] flex flex-col justify-center gap-10 items-center">
        <div className="md:flex-row md:items-start md:text-start
        flex flex-col items-center gap-5 text-cen">
          <div className="z-100 img h-[158.67px] w-[158.67px] hover:scale-110 transition-transform duration-300">
            <img src={profile} alt="" className="rounded-2xl h-full w-full object-cover "/>
          </div>
          <div className="md:items-start w-[90%] flex flex-col gap-5 items-center">
            <div className="text-center md:text-start">
            <h1 className="bg-linear-to-r from-[#00bf8f] via-[#1cd8d2] to-[#302b63] bg-clip-text text-transparent text-4xl font-bold">
            Sagar Bisht
          </h1>
          <h2 className="font-bold">Full Stack Developer</h2>
            </div>
          <p className="text-[#ccd6d8] text-center md:text-start">
            I build scalable, modern applications with a strong focus on clean
            architecture, delightful UX, and performance. My toolkit spans JavaScript,
            React, TypeScript, Tailwind CSS, and RestAPI—bringing ideas
            to life from concept to production with robust APIs and smooth
            interfaces.
          </p>
            <div className="md:w-[50%]
            boxes flex w-[100%] justify-center gap-3 ">
            <div className="bg-white/8 w-[50%] h-20 border  border-[#ccd6d8]/50 rounded-2xl flex-col flex items-center justify-center ">
              <h1 className="text-[#ccd6d8]">Specialty</h1>
              <p className="font-semibold"> Front End</p>
            </div>
            <div className=" bg-white/8 w-[50%] h-20 border border-[#ccd6d8]/50 flex-col rounded-2xl flex items-center justify-center">
              <h1 className="text-[#ccd6d8]">Focus</h1>
              <p className="font-semibold">Perfomance & UI</p>
            </div>
          </div>
          <div className="md:w-[30%] md:flex-row
          links flex flex-col gap-5 w-full">
            <a
              href="#projects"
              className="w-full h-10 py-8 px-10 rounded-2xl border  border-[#ccd6d8]/50 flex justify-center items-center bg-white text-black"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full h-10 py-8 px-10 rounded-2xl border  border-[#ccd6d8]/50 flex justify-center items-center bg-white/10 hover:bg-white/15"
            >
              Get In Touch
            </a>
          </div>
          </div>
          

        </div>
        <div className="md:text-start
        text-center">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-[#ccd6d8]">
            I’m a Software Developer and Web Developer — passionate about
            building fast, resilient applications.
            <br />
            <br />I love turning ideas into scalable, user‑friendly products
            that make an impact.
          </p>

        </div>
      </div>

    </section>
  );
}

export default About;
