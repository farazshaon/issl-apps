import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { NewsRoom5 } from '../../components/NewsRoom/NewsRoom5'
import TopBanner from '../../components/TopBanner/TopBanner'

export const NewsRoomPages5 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Details'/>
    <NewsRoom5/>
    <Footer/>
    </>
  )
}
