import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import projectsData from '../data/projectdata'
import ProjectComponent from '../components/ProjectComponent'

function Projects() {
  return (
    <section
      className="relative bg-[#174f46] w-full min-h-screen"
      id="projects"
    >
      <motion.h2
        className="relative top-5 text-center font-bold text-5xl"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        My Work
      </motion.h2>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer rounded-full bg-white p-4 shadow-lg hover:scale-110 transition">
        <FaChevronLeft className="text-[#174f46] text-xl" />
      </div>

      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer rounded-full bg-white p-4 shadow-lg hover:scale-110 transition">
        <FaChevronRight className="text-[#174f46] text-xl" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        className="mt-10"
      >
        {projectsData.map((project) => (
          <SwiperSlide
            key={project.id}
            className="h-[80vh] w-[80%]"
          >
            <ProjectComponent project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Projects