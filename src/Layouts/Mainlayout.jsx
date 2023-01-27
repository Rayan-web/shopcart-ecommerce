import React from 'react'
import Alertheader from '../components/alertheader'
import CategoriesNav from '../components/CategoriesNav'
import Main from '../components/main'
import Priceoff from '../components/priceoff'

const Mainlayout = () => {
  return (
    <div>
        <Priceoff/>
        <CategoriesNav/>
        <Main/>
    </div>
  )
}

export default Mainlayout