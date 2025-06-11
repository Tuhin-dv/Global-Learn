import React from 'react'
import Nav from '../components/headers/Nav'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
        <Nav></Nav>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout