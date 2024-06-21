import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const RootLayout = () => {
  return (
    <div>
     
      <Outlet/>
        </div>
  )
}

export default RootLayout
