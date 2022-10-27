import React from "react";
import Lottie from "lottie-react";
import animationData from './world_location.json'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import About from '../../components/about/About'
import Experience from '../../components/experience/Experience'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import Testimonials from '../../components/testimonials/Testimonials'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import BackgroundParticles from '../../components/particles/BackgroundParticles.jsx'
import Education from '../../components/education/Education'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


function PreLoader() {

  return (
    <Lottie options={defaultOptions}
        height={400}
        width={400}/>
  );
}

export default PreLoader;
