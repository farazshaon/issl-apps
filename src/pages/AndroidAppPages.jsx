import React from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

import Footer from '../components/Footer/Footer'
import { AndroidApps } from '../components/AndroidApps/AndroidApps'
import { CopyRight } from '../components/CopyRight/CopyRight'


export const AndroidAppPages = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='AndroidApps'/>
    <AndroidApps />
    <Footer/>
    <CopyRight/>
    </>
  )
}
