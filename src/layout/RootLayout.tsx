import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import Navbar from '../components/Card/Navbar'
type Props = {}

const RootLayout = (props: Props) => {
  return (
    <div> 

      <Navbar/>

      <Outlet/>
     
    </div>
  )
}

export default RootLayout