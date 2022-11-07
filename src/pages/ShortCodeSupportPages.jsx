import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import { ShortCodeSupport } from '../components/ShortCodeSupport/ShortCodeSupport'
import TopBanner from '../components/TopBanner/TopBanner'

export const ShortCodeSupportPages = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner/>
        <ShortCodeSupport/>
        <Footer/>
    </>
  )
}
