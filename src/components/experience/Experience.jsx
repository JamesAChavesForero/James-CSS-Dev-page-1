import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>what skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="expereince__frontend">
          <h3>Front End evelopment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML5</h4>
              <small className="text-light">
                Expererience
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML5</h4>
              <small className="text-light">
                Advanced
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS3</h4>
              <small className="text-light">
                Advanced
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>ECMA6+</h4>
              <small className="text-light">
                Advanced
              </small>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">
                Expererience
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">
                Expererienced
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Node</h4>
              <small className="text-light">
                Intermediate
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>APIs</h4>
              <small className="text-light">
                Expererienced
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JQuery</h4>
              <small className="text-light">
                Expererienced
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Figma UX/UI</h4>
              <small className="text-light">
                Intermediate
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">
                Expererience
              </small>
            </article> */}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back End Development</h3>
        <article className="experience__details">
              <BsPatchCheckFill />
              <h4>SQL Server</h4>
              <small className="text-light">
                Intermediate
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>FireBsase</h4>
              <small className="text-light">
                Expererienced
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>C#</h4>
              <small className="text-light">
                Intermediate
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>ASP.Net</h4>
              <small className="text-light">
                Intermediate
              </small>
            </article>
             {/*<article className="experience__details">
              <BsPatchCheckFill />
              <h4>Java OOP</h4>
              <small className="text-light">
                Beginner
              </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Auth2.O</h4>
              <small className="text-light">
              Intermediate
              </small>
            </article> */}
        </div>
      </div>
    </section>
  )
}
