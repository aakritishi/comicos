import React from 'react'
import Header from '../commons/Header'
import Footer from '../commons/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default MainLayout