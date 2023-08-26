import React from 'react'
import fullCV from '../../assets/JC-CV-Full.pdf'
import devCV from '../../assets/JC-CV-Dev.pdf'

export default function CTA() {
  return (
    <div className='cta'>
      <button className='jiggle'>
        <a href={devCV} download>Download Dev CV</a>
      </button>
      <button className='jiggle'>
        <a href={fullCV} download>Download Full CV</a>
      </button>
      <button className='jiggle'>
        <a href="#contact" >Let's Talk</a>
      </button>
    </div>
  )
}
