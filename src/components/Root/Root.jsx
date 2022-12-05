import React from 'react'
import NavBar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <footer style={{
          backgroundColor: 'gray',
          display: "flex",
          flexDirection:"row",
          fontSize: "20px",
          justifyContent: "space-around",
          position: "static"
          ,bottom:"0"
          ,width: "100% vw"
        
          
        }}> 
        <p>
          BOOP 
        </p>
        <p>
          Contact
        </p>
        <p>
          Media
        </p>
          
        </footer>
    </div>
  )
}

export default Root