import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { NewsRoom3 } from '../../components/NewsRoom/NewsRoom3'
import TopBanner from '../../components/TopBanner/TopBanner'

export const NewsRoomPages3 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Details'/>
    <NewsRoom3 />
    <Footer/>
    </>
  )
}
