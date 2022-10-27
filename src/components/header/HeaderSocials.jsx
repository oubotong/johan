import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiRiotgames} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/botong97" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/oubotong" target="_blank"><FaGithub/></a>
        <a href="https://www.ea.com/games/apex-legends" target="_blank"><SiRiotgames/></a>
    </div>
  )
}

export default HeaderSocials