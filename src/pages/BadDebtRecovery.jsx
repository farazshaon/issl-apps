import React from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'
import Menu from '../components/Menu/Menu'
import DetailsPages from '../components/DetailsPages/DetailsPages'
import Footer from '../components/Footer/Footer'
import {inbound_service} from '../Data/BackOfficeServiceData/BadDebtRecoveryData'

export default function InboundServices() {


  
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner/>
        <Menu/>
        <DetailsPages data={inbound_service}/>
        <Footer/>
    </>
  )
}
