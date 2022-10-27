import React from 'react'
import './about.css'
import rick1 from '../../assets/4.gif'
import {FaAward} from 'react-icons/fa'
import {MdWeb} from 'react-icons/md'
import {AiOutlineCloudServer} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={rick1} alt="About Image" width="720" height="542" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Work Experience</h5>
              <small>2+ Years<br/>Research Assistant</small>
            </article>

            <article className='about__card'>
              <MdWeb className='about__icon'/>
              <h5>Areas</h5>
              <small>Operating System<br/>Security & Privacy<br/>Deep Learning</small>
            </article>

            <article className='about__card'>
              <AiOutlineCloudServer className='about__icon'/>
              <h5>Life</h5>
              <small>Video Games<br/>Ping-pong, volley ball</small>
            </article>
          </div>

          <p>
          I am an active software developer.<br/>
          I am a professional ping-pong athlete in the past years.<br/>
          I am also a researcher who explore technologies to improve life of humans.<br/>
          And I really like to watch Rick & Morty
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About