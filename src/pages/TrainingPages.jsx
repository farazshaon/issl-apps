import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'
import {inbound_service} from '../Data/TrainingHRSourcingData/TrainingData'
import DetailsPages from '../components/DetailsPages/DetailsPages'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Menu from '../components/Menu/Menu'
import {TrainingHRsourcingMenu} from '../Data/TrainingHRSourcingData/TrainingHRsourcingMenu'
function TrainingPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='Training'/>
    <Menu menu={TrainingHRsourcingMenu}/>
    <DetailsPages  data={inbound_service}/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default TrainingPages