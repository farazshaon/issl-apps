import React from 'react'
import ContactUs from '../components/ContactUs/ContactUs'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

function ContactPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <ContactUs/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default ContactPages