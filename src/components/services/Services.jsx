import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Course Instructor</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://guides.lib.purdue.edu/d-velop/22f-python">Introduction to Python in Data Science</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://guides.lib.purdue.edu/d-velop/22fall-data-scraping">Data Scraping and Analysis with Python</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://guides.lib.purdue.edu/d-velop/fall22-nn">Introduction to Neural Networks</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://guides.lib.purdue.edu/d-velop/22fall-api-database ">Introduction to Web API and Database</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://guides.lib.purdue.edu/d-velop/22fall-transformer">Introduction to Transformers in Image Processing</a>
            </li>
          </ul>
        </article>
        {/* END OF COURSES */}
        <article className="service">
          <div className="service__head">
            <h3>Software Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://github.com/oubotong/Armariris">Armariris: LLVM based program obfuscator</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://github.com/oubotong/Kubernetes-verification">Network Policies Verification Tools for Kubernetes</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://github.com/oubotong/arm-secure-nn-1">Secure Deep Learning Framework for Edge Devices</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://github.com/oubotong/WASI-SN">Portable and Secure Edge Interface with Networked Access Control</a>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <a href="https://github.com/oubotong/TinySecontainer">Fine-grained Access Control over Syscall for Container Environment</a>
            </li>
          </ul>
        </article>
        {/* Software DEVELOPMENT */}
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services