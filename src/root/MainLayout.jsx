import React from 'react'
import Nav from '../components/headers/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'


function MainLayout() {
  return (
    <div className='relative'>
        <Nav></Nav>
       <div>
         <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default MainLayout