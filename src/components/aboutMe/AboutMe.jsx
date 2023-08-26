import React from 'react'
import './aboutMe.css'
import me from '../../assets/me2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function AboutMe() {
  return (
    <section id='aboutMe'>
      <h5>Learn More</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className='about__me-image'>
            <img src={me} alt="amout me img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>App Development</h5>
              <small>Developing fully functional customized cross platform apps</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Web Architecture</h5>
              <small>Designing to meet specific technical, aesthetic and functional pre-determined requirements</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clean Code</h5>
              <small>Maintaning the simplisity, coherency, reusability of minimalistic clean code.</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5> UX /UI Design </h5>
              <small> Designing , Prototyping and Designing Dynamic Websites that adapt to the screen size and orientation of the device being used.</small>
            </article>

          </div>
          <p>
           I am veryexcited to showcase some of my skills in this page in hopes that I may have the privilage to continue on my journey as a Front-End Developer, Doing what I love and getting better everyday
          </p>
          <a href='#contact' className='btn btn-primary border-slate-100'> <b className=' animate-pulse font-bold'>Let's Talk</b> </a>
        </div>
      </div>

    </section>
  )
}