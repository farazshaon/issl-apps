import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { NewsRoom6 } from '../../components/NewsRoom/NewsRoom6'
import TopBanner from '../../components/TopBanner/TopBanner'

export const NewsRoomPages6 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Details'/>
    <NewsRoom6 />
    <Footer/>
    </>
  )
}
