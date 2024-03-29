import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import News from '../components/News/News'
import TopBanner from '../components/TopBanner/TopBanner'

export const NewsPages = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='News Room'/>
    <News/>
    <Footer/>
    <CopyRight/>
    </>
  )
}
