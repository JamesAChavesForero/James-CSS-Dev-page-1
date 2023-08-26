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
                <div className="dancing__text h-[135px]">
                    <span>F</span>
                    <span>R</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>-</span>
                    <span>E</span>
                    <span>N</span>
                    <span>D</span>
                    <br/>
                    <span>D</span>
                    <span>E</span>
                    <span>V</span>
                    <span>E</span>
                    <span>L</span>
                    <span>O</span>
                    <span>P</span>
                    <span>E</span>
                    <span>R</span>
                </div>
                <CTA />
                <Socials />
                <Nav />
                <div className='me m-2 p-1 '>
                    <img src={me} alt='' className='mi'></img>
                </div>
                <a href="#contact" className='scroll_down'></a>
            </div>
        </header>
    )
}
