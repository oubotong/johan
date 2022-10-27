import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import BackgroundParticles from './components/particles/BackgroundParticles.jsx'
import Education from './components/education/Education'


const App = () => {

  return (
    <div className="App">
        <BackgroundParticles/>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Education/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
    


);


      

}


export default App