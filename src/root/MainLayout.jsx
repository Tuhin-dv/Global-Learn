import React from 'react'
import Nav from '../components/headers/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div>
        <Nav></Nav>
       <div className='max-w-[1700px] mx-auto'>
         <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default MainLayout