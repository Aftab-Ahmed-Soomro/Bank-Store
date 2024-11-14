import React from 'react'
import Footer from '../Footer/Footer'
import Header from "../Header/Header"
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer /> 
    </div>
  )
}

export default AppLayout
