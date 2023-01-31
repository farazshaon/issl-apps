import React from 'react'
import { BlogDetails } from '../components/BlogDetails/BlogDetails'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

export const BlogDetailsPages = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <BlogDetails/>
    <Footer/>
    <CopyRight/>
    </>
  )
}
