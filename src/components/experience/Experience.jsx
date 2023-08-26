import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'
const json_data = require('./experience.json');
const tools = json_data.expObjectArray[0].Tools;
const skills = json_data.expObjectArray[1].skills

const mimiCardCreator = (arr) => {
  return arr.map(d => <article className="experience__details flex justify-between items-stretch m-1 p-1 hover:text-white">
    <BsPatchCheckFill />
    <h4>{Object.keys(d)[0]}</h4>
    <small className="text-light">
      {Object.values(d)[0]} Years
    </small>
  </article>
  )
}

export default function Experience() {

  return (
    <section id='experience'>
      <h5>Tools Skills - & - Experience</h5>
      <div className="container experience__container [&>div]:m-4 [&>div]:text-center">
        <div className="flex flex-col justify-evenly"id="tools">
          <h3>Tools Used</h3>
          <div className="experience__content">
            {tools && mimiCardCreator(tools)}
          </div>
        </div>
        <div className="flex flex-col justify-evenly"id="skills">
          <h3>Skills Applied</h3>
          <div className="experience__content">
            {skills && mimiCardCreator(skills)}
          </div>
        </div>
      </div>
    </section>
  )
}