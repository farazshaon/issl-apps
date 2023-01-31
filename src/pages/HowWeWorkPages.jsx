import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HowWeWork from '../components/HowWeWork/HowWeWork'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

function HowWeWorkPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='How We Work'/>
    <HowWeWork/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default HowWeWorkPages