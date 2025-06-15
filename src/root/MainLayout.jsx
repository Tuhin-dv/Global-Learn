import React from 'react'
import Nav from '../components/headers/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div>
        <Nav></Nav>
       <div className=''>
         <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default MainLayout