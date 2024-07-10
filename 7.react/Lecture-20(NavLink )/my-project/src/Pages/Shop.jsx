import React from 'react'

import OrderSummry from './OrderSummry'
import { useNavigate } from 'react-router-dom'

const Shop = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1 className='text-3xl font-normal text-center'>This is Shop Page</h1>
      <button onClick={() => navigate('/ordersummry')} className='btn'>order Place</button>
    </div>
  )
}

export default Shop
