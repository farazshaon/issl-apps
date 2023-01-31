import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import { ClientSlider } from '../components/ClientSlider/ClientSlider'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'

import TopBanner from '../components/TopBanner/TopBanner'


export default function AboutUsPages() {
  return (
    <>
    <Header />
    <NavBar/>
    <TopBanner BannerTitle='About Us'/>
    <AboutUs/>
    <ClientSlider/>
    <Footer/>
    <CopyRight/>
    </>
  )
}
