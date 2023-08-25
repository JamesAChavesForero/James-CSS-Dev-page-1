import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {DiReact} from 'react-icons/di'

export default function Socials() {
  return (
    <div className='socials'>
        <a href="https://www.linkedin.com/in/james-chaves-codeenglish"><BsLinkedin/></a>
        <a href="https://github.com/JamesChavesRepos/react-Dev-Test/tree/master"><FaGithub/></a>
        <a href="https://www.codewars.com/users/james%20chaves"><DiReact/></a>
    </div>
  )
}
