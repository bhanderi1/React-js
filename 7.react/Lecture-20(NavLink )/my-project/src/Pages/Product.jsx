import React from 'react'
import { Link ,Outlet } from 'react-router-dom'


const Product = () => {
    return (
        <div>
            <h1 className='text-bold text-2xl'>This ia product page</h1>
            <nav className='mt-4'>
                <Link to='productfeature' className='text-bold btn me-5'>Product Features</Link>
                <Link to='newproduct' className='text-bold btn'>New Product</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Product
