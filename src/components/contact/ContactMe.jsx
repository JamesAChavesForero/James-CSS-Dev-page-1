import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactMe() {
  return (
    <section id='contact' className='w-full flex-col'>
      <h5>Get in Contact</h5>
      <h2>Contact Me</h2>
      <div className="justify-between sm:flex">
        <div className="flex-col text-xl text-center ">
          <article className="bg-[#2c2c6c] hover:bg-transparent rounded-md p-2 m-4 cursor-pointer !border-indigo-500/100">
            <MdOutlineEmail />
            <h4>Email Address</h4>
            <h5>JavesChames2024@gmail.com</h5>
            <a href="mailto:javeschames2024@gmail.com">Send me an Email</a>
          </article>
          <article className="bg-[#2c2c6c] hover:bg-transparent rounded-md p-2 m-4">
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>3238119340</h5>
            <a target="_blank" href="https://wa.me/+573238119340">Send me a WhatsApp message</a>
          </article>
        </div>
        <form action="" className='flex-col gap-1 justify-evenly items-center'>
          <input type="text" name="name" className='p-1 my-2 mx-4 w-[80%] rounded-sm justify-center text-[#2c2c6c]' placeholder='Your Name' required />
          <input type="text" name="companyName" className='p-1 my-2 mx-4 w-[80%] rounded-sm justify-center text-[#2c2c6c]' placeholder='Company Name' />
          <textarea name="message" className='p-1 my-2 mx-4 w-[90%] rounded-sm justify-center text-[#2c2c6c]' placeholder='place your message here , I will get back to you as soon as possible' cols="30" rows="10" required></textarea>
          <button>
           Send! 
          </button>        
        </form>
      </div>
    </section>
  )
}
