import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import SoftwareDevelopment from '../components/SoftwareDevelopment/SoftwareDevelopment'
import TopBanner from '../components/TopBanner/TopBanner'

const SoftwareDevelopmentPages = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner/>
        <SoftwareDevelopment/>
        <Footer/>
        <CopyRight/>
    </>
  )
}

export default SoftwareDevelopmentPages