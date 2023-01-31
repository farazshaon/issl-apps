import React from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'
import Menu from '../components/Menu/Menu'
import DetailsPages from '../components/DetailsPages/DetailsPages'
import Footer from '../components/Footer/Footer'
import {inbound_service} from '../Data/CallCenterServiceData/inboundServiceData'
import { CopyRight } from '../components/CopyRight/CopyRight'
import { CallCenterServicesMenu } from '../Data/CallCenterServiceData/CallCenterServicesMenu'
export default function InboundServices() {


  
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner BannerTitle='INBOUND SERVICES'/>
        <Menu menu={ CallCenterServicesMenu}/>
        <DetailsPages data={inbound_service}/>
        <Footer/>
        <CopyRight/>
    </>
  )
}
