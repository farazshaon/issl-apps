import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import { PlatformManagement } from '../components/PlatformManagement/PlatformManagement'
import TopBanner from '../components/TopBanner/TopBanner'

function PlatformManagementPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <PlatformManagement/>
    <Footer/>
    </>
  )
}

export default PlatformManagementPages