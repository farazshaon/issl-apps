import React from 'react'
import Career from '../components/Career/Career'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

function CareerPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='CAREER'/>
    <Career/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default CareerPages