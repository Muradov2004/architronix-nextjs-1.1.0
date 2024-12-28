import React from 'react'
import BannerTwo from '@/components/section/heroes/bannerOne'
import BannerOne from '@/components/section/heroes/bannerTwo'
import HeaderTwo from '@/components/header/headerTwo'
import Header from '@/components/preview/header'
import Banner from '@/components/preview/banner'
import Demos from '@/components/preview/demos'
import Footer from '@/components/footer'
import Home1 from './home-1/page'
import HeaderOne from '@/components/header/headerOne'

const Home = () => {
  return (
    <>
      <HeaderOne />
      {/* <Banner />
      <Demos /> */}
      <Home1/>
      <Footer />
    </>
  )
}

export default Home