import React from 'react'
import Navbar from './components/Navbar'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Home from './sections/Home'
import CustomCursor from './components/CustomCursor'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  return (
      <div className='relative gradient text-white overflow-x-hidden'>
        <CustomCursor/>
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
        
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App