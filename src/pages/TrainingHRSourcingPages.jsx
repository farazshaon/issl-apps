import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBannerBG from '../components/TopBannerBG/TopBannerBG'
import TrainingHRSourcing from '../components/TrainingHRSourcing/TrainingHRSourcing'
import BanngerImg from '../assets/images/Training-&-HR-Sourcing_with-text.jpg'
import { CopyRight } from '../components/CopyRight/CopyRight'

const TrainingHRSourcingPages = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBannerBG Banner={BanngerImg}/>
        <TrainingHRSourcing/>
        <Footer/>
        <CopyRight/>
    </>
  )
}

export default TrainingHRSourcingPages