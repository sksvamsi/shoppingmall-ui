

import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import WomensCollection from '../components/WomensCollection'

const MainPage = () => {

  return (
    <div>
        <Header />
        <Banner />
        <Collections/>
        <WomensCollection/>
        <Footer />
    </div>
  )
}

export default MainPage