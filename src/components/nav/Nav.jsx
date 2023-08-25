import React from 'react'
import { useState } from 'react'

import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'

export default function Nav() {
  const [activeNav,setActiveNav] = useState('#')

  function activeToggler(target){
    setActiveNav(target)
  }
  return (
    <nav>
        <a href="#" onClick={()=>{activeToggler('#')}} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#aboutMe" onClick={()=>{activeToggler('#aboutMe')}} className={activeNav === '#aboutMe' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={()=>{activeToggler('#experience')}} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        <a href="#services" onClick={()=>{activeToggler('#services')}} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={()=>{activeToggler('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
    </nav>
  )
}
