import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className='bg-gray-500 flex items-center justify-around p-[10px] border-3 border-black font-semibold'>
        <div className='w-[70px]'>
            <Link href="/">
                <h1 className='font-bold text-[30px] text-white'>LOGO</h1>
            </Link>
        </div>
        <nav className='nav-link'>
        <ul className='flex text-white'>
          <li><Link to="/" className='ml-[100px]'>Home</Link></li>
          <li><Link to="/aboutus" className='ml-[100px]'>AboutUs</Link></li>
          <li><Link to="/contact" className='ml-[100px]'>Contact Us</Link></li>
          <li><Link to="/shop" className='ml-[100px]'>Shop</Link></li>
          <li><Link to="/bolg" className='ml-[100px]'>Bolg</Link></li> 
        </ul>

        </nav>
      </header>
    </div>
  )
}

export default Navbar
