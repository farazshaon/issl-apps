import React from 'react'
import CallCenterServices from '../components/CallCenterServices/CallCenterServices'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBannerBG from '../components/TopBannerBG/TopBannerBG'
import BanngerImg from '../assets/images/Call-Center_with-text.jpg'
import { CopyRight } from '../components/CopyRight/CopyRight'

const CallCenterServicesPages = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBannerBG Banner={BanngerImg}/>
    <CallCenterServices/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default CallCenterServicesPages