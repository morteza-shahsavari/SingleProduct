import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

const Home = () => {
  return (
    <div>    
    <NavBar/>
    <Outlet/>
    <h1>footer</h1>
    </div>
  )
}

export default Home