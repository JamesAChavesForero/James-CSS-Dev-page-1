import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/mee.png'
import Socials from './Socials'
import Nav from '../nav/Nav'

export default function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1> James Chaves</h1>
                <h5 className='text-light'> Front End Developer</h5>
                <CTA />
                <Socials/>
                <Nav/>
                <div className='me m-2 p-1 '>
                    <img src={me} alt='' className='mi'></img>
                </div>
                <a href="#contact" className='scroll_down'></a>
            </div>
        </header>
    )
}
