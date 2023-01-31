import React from 'react'
import BackOfficeService from '../components/BackOfficeService/BackOfficeService'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBannerBG from '../components/TopBannerBG/TopBannerBG'
import BanngerImg from '../assets/images/Back-Office.jpg'
import { CopyRight } from '../components/CopyRight/CopyRight'

const BackOfficeServicePages = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBannerBG Banner={BanngerImg}/>
        <BackOfficeService />
        <Footer/>
        <CopyRight/>
    </>
  )
}

export default BackOfficeServicePages