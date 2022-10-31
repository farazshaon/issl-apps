import React from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Slider from '../components/Slider/Slider'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
import Blog from '../components/Blog/Blog'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Countup from '../components/Countup/Countup'


export default function HomePages() {
  return (
    <>
     <Header/>
     <NavBar/>
     <Slider/>
     <AboutUs/>
     <Services Heading='OUR SERVICES'/>
     <Countup/>
     <Blog Heading='LATEST BLOGS'/>
     <ContactUs/>
     <Footer/>

  
    </>
  )
}
