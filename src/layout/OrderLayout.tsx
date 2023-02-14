import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import Navbar from '../components/Card/Navbar'
type Props = {}

const OrderLayout = (props: Props) => {
  return (
    <div> 

    

      <Outlet/>
     
    </div>
  )
}

export default OrderLayout