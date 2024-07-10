import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Navbar = () => {
  const navstyle =({isActive})=>{
    return{
       color:isActive ? "white" : "black"
    }
  }
  return (
    <div>
      <header className='bg-gray-500 flex items-center justify-around p-[10px] border-3 border-black font-semibold'>
        <div className='w-[70px]'>
            <Link href="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKJoBr94Ojcv3eAwIksAZiVjrWwex0IHMcafwSqknUg&s" alt=""  className='logo' width={70}/>
            </Link>
        </div>
        <nav className='nav-link'>
        <ul className='flex'>
          <li><NavLink style={navstyle} to="/" className='ml-[100px]'>Home</NavLink></li>
          <li><NavLink style={navstyle} to="aboutus" className='ml-[100px]'>AboutUs</NavLink></li>
          <li><NavLink style={navstyle} to="contact" className='ml-[100px]'>Contact Us</NavLink></li>
          <li><NavLink style={navstyle} to="shop" className='ml-[100px]'>Shop</NavLink></li>
          <li><NavLink style={navstyle} to="bolg" className='ml-[100px]'>Bolg</NavLink></li> 
          <li><NavLink style={navstyle} to="product" className='ml-[100px]'>product</NavLink></li> 
        </ul>

        </nav>
      </header>
    </div>
  )
}

export default Navbar
