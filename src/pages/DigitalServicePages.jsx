import React from 'react'
import DigitalService from '../components/DigitalService/DigitalService'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBannerBG from '../components/TopBannerBG/TopBannerBG'
import BanngerImg from '../assets/images/Digital-Marketing-Service.jpg'
import { CopyRight } from '../components/CopyRight/CopyRight'
const DigitalServicePages = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBannerBG Banner={BanngerImg}/>
    <DigitalService/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default DigitalServicePages