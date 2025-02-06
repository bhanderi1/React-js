import React from 'react'

import { useNavigate } from 'react-router-dom'

const OrderSummry = () => {

    const navigate1 = useNavigate()
    return (
        <div>
            <span className='text-red-500 text-[22px]'>Order Confirmed!!!</span><br></br>
            <button onClick={() => navigate1(-1)} className='text-red-700 text-blod'>Go Back</button>
        </div>
    )
}

export default OrderSummry
