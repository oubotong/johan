import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/paper1.png'
import IMG2 from '../../assets/paper2.jpg'
import IMG3 from '../../assets/paper3.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'SecDeep: Secure and Performant On-device Deep Learning Inference Framework for Mobile and IoT Devices (IOTDI 2021)',
    github: 'https://github.com/oubotong/arm-secure-nn-1',
    demo: 'https://dl.acm.org/doi/10.1145/3450268.3453524'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Secure Edge Interface with Networked Access Control (ATC 2023 Under Review)',
    github: 'https://github.com',
    demo: 'https://dl.acm.org'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TEE-based Framework to Protect Cloud Infrastucture (ASPLOS 2023 Under Review)',
    github: 'https://github.com',
    demo: 'https://dl.acm.org'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Publications</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Paper Link</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio