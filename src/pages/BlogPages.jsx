import React from 'react'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import TopBanner from '../components/TopBanner/TopBanner'

function BlogPages() {
  return (
    <>
    <Header/>
    <NavBar/>
    <TopBanner/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default BlogPages