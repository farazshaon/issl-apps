import React from 'react'
import { BlogDetails2 } from '../components/BlogDetails/BlogDetails2'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

export const BlogDetailsPages2 = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <BlogDetails2/>
    <Footer/>
    <CopyRight/>
    </>
  )
}
