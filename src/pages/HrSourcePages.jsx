import React from 'react'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'
import Menu from '../components/Menu/Menu'
import DetailsPages from '../components/DetailsPages/DetailsPages'
import Footer from '../components/Footer/Footer'
import {inbound_service} from '../Data/TrainingHRSourcingData/HRSourcingData'
import { CopyRight } from '../components/CopyRight/CopyRight'
import {TrainingHRsourcingMenu} from '../Data/TrainingHRSourcingData/TrainingHRsourcingMenu'
export default function InboundServices() {

  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner/>
        <Menu menu={ TrainingHRsourcingMenu}/>
        <DetailsPages data={inbound_service}/>
        <Footer/>
        <CopyRight/>
    </>
  )
}
