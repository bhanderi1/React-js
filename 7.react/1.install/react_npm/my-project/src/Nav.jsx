import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <a href="">
             <h3>Navbar</h3> 
            </a>
        </div>
        <div className="nav-item">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">About US</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
