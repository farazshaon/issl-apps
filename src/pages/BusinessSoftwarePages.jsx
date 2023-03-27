import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LatestWorks from '../components/LatestWorks/LatestWorks'
import Menu from '../components/Menu/Menu'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'
import { SoftwareDevelopMenu } from '../Data/SoftwareDevelopmentData/SoftwareDevelopMenu'

function BusinessSoftwarePages() {
  return (
    <>
      <Header/>
      <NavBar/>
      <TopBanner BannerTitle='Business Software'/>
      <Menu menu={ SoftwareDevelopMenu}/>
      <LatestWorks/>
      <Footer/>
      <CopyRight/>
    </>
  )
}

export default BusinessSoftwarePages
