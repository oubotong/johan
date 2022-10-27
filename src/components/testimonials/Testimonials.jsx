import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/fav1.jpg'
import AVTR2 from '../../assets/fav2.jpg'
import AVTR3 from '../../assets/fav3.jpg'
import AVTR4 from '../../assets/fav4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Apex Legends',
    review: 'This game is so attracting that I have played for over 1500+ hrs and made to Master rank :)'
  },
  {
    avatar: AVTR2,
    name: 'Sushi & Ramen',
    review: 'Best food invented on the earch!'
  },
  {
    avatar: AVTR3,
    name: 'Avengers',
    review: 'Hate the ending but love the 3D physics'
  },
  {
    avatar: AVTR4,
    name: 'Bones',
    review: 'I don\'t know I just like Imagine Dragons'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Favourites</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h3 className='client__name'>{name}</h3>
              <h4 className='client__review'>{review}</h4>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials