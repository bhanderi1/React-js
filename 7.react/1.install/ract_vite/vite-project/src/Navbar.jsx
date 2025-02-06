import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
            <h3 className='text-6xl'>L o g o</h3>
        </div>
        <div className='nav-item'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
