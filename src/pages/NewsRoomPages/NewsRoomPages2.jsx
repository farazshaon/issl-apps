import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { NewsRoom2 } from '../../components/NewsRoom/NewsRoom2'
import TopBanner from '../../components/TopBanner/TopBanner'

export const NewsRoomPages2 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Details'/>
    <NewsRoom2 />
    <Footer/>
    </>
  )
}
