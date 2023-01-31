import React from 'react'
import Blog from '../components/Blog/Blog'
import { CopyRight } from '../components/CopyRight/CopyRight'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

function BlogPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner BannerTitle='BLOG'/>
    <Blog/>
    <Footer/>
    <CopyRight/>
    </>
  )
}

export default BlogPages