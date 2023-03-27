import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import NavBar from '../components/NavBar/NavBar'
import { PlatformManagement } from '../components/PlatformManagement/PlatformManagement'
import TopBanner from '../components/TopBanner/TopBanner'
import { DigitalServicesMenu } from '../Data/DigitalServiceData/DigitalServicesMenu'
function PlatformManagementPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='Platform Management'/>
    <Menu menu={ DigitalServicesMenu}/>
    <PlatformManagement/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default PlatformManagementPages