import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { NewsRoom1 } from '../../components/NewsRoom/NewsRoom1'
import TopBanner from '../../components/TopBanner/TopBanner'

export const NewsRoomPages1 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Details'/>
    <NewsRoom1/>
    <Footer/>
    </>
  )
}
