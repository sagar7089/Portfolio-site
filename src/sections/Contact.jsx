import React, { useState } from 'react'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { toast, Bounce } from "react-toastify"
import astra from "../assets/Astra.png"
import stars from "../assets/stars.jpg"
import { useForm } from 'react-hook-form'

function Contact() {
  const { register, formState: { errors }, reset, handleSubmit } = useForm()
  const [sending, setSending] = useState(false)

  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  }

  async function onSubmit(data) {
    setSending(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      toast.success("Message sent! I'll get back to you soon.", toastOptions)
      reset()
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong. Please try again.", toastOptions)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      style={{ backgroundImage: `url(${stars})` }}
      className=' flex w-full  min-h-screen  bg-black' id='contact'>
      <div className="md:gap-20 md:flex-row md:items-center w-full gap-10 main flex justify-center flex-col items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            x: { duration: 0.5, delay: 0.1 },
            opacity: { duration: 0.5, delay: 0.1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-80 h-80 mt-10 md:w-[40vw] md:h-[40vw]"
        >
          <img src={astra} alt="" className="object-contain" />
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='w-[90%] z-10 md:w-[50%] bg-white/10 p-6 rounded-xl flex flex-col gap-4'>
          <h2 className='font-bold w-full text-3xl'>Let's Work Together</h2>

          <form className=' flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Name <br />
                <input
                  id="name"
                  type="text"
                  placeholder='Your Name'
                  className='bg-white/10 border-white/20 border-2 p-3 rounded-xl w-full'
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name is too short" },
                    maxLength: { value: 50, message: "Name is too long" },
                  })}
                />
              </label>
              {errors.name && <p className="text-red-400 text-sm mt-1">*{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email">Email <br />
                <input
                  id="email"
                  type="text"
                  placeholder='Your Email'
                  className='bg-white/10 border-white/20 border-2 p-3 rounded-xl w-full'
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
              </label>
              {errors.email && <p className="text-red-400 text-sm mt-1">*{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message">Message <br />
                <textarea
                  id="message"
                  placeholder='Message'
                  className='bg-white/10 h-40 border-white/20 border-2 p-3 rounded-xl w-full'
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message should be at least 10 characters" },
                    maxLength: { value: 1000, message: "Message is too long" },
                  })}
                />
              </label>
              {errors.message && <p className="text-red-400 text-sm mt-1">*{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className='hover:scale-105 bg-[#155dfd] p-5 rounded-xl transition-transform duration-300 active:scale-95 disabled:opacity-50 disabled:hover:scale-100'>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact