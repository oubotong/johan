import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4 className="text-light">Hello I'm</h4>
        <h1>Botong Ou</h1>
        <h4 className="text-light">A Fullstack Software Developer</h4>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
