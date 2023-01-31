import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MobileApplications from '../components/MobileApplications/MobileApplications'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

const MobileApplicationsPages = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner/>
        <MobileApplications/>
        <Footer/>
        <CopyRight/>
    </>
  )
}

export default MobileApplicationsPages