import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { NewsRoom4 } from '../../components/NewsRoom/NewsRoom4'
import TopBanner from '../../components/TopBanner/TopBanner'

export const NewsRoomPages4 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Details'/>
    <NewsRoom4/>
    <Footer/>
    </>
  )
}
