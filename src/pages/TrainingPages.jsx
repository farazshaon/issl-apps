import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'
import {inbound_service} from '../Data/TrainingHRSourcingData/TrainingData'
import DetailsPages from '../components/DetailsPages/DetailsPages'
function TrainingPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <DetailsPages  data={inbound_service}/>
    <Footer/>
    </>
  )
}

export default TrainingPages