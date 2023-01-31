import React from 'react'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import NavBar from '../components/NavBar/NavBar'
import { ShortCodeSupport } from '../components/ShortCodeSupport/ShortCodeSupport'
import TopBanner from '../components/TopBanner/TopBanner'
import { DigitalServicesMenu } from '../Data/DigitalServiceData/DigitalServicesMenu'
export const ShortCodeSupportPages = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <TopBanner/>
        <Menu menu={ DigitalServicesMenu}/>
        <ShortCodeSupport/>
        <Footer/>
        <CopyRight/>
    </>
  )
}
