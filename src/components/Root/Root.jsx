import React from 'react'
import NavBar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <h2>Footer</h2>
    </div>
  )
}

export default Root