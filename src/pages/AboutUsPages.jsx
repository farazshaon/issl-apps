import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import NavBar from '../components/NavBar/NavBar'
import Team from '../components/Team/Team'
import TopBanner from '../components/TopBanner/TopBanner'

export default function AboutUsPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <Menu/>
    <AboutUs/>
    <Team/>
    <Footer/>
    </>
  )
}
