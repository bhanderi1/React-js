import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <div className="sticky top-0 min-h-[80px] w-[80%] m-auto flex justify-between items-center overflow-hidden bg-[#141414]">
        <div>
          <h1 className="text-white uppercase pl-[40px]">
            {/* <NavLink to='/'>
              Shopping
            </NavLink> */}
            <span>Shopping</span>
          </h1>
        </div>
        <div className="flex justify-evenly w-[50%]">
          <ul>
            <li className="font-[18px] inline-block text-white py-[15px] hover:text-[#fffc3c]">
              {/* <NavLink to='/'>Home</NavLink> */}
              <span>Home</span>
            </li>
          </ul>
          <ul>
            <li className="font-[18px] inline-block text-white py-[15px] hover:text-[#fffc3c]">
              {/* <NavLink to='shop_now'>Signup</NavLink> */}
              <span>SignUp</span>
            </li>
          </ul>
          <ul>
            <li className="font-[18px] inline-block text-white py-[15px] hover:text-[#fffc3c]">
              {/* <NavLink to='cart'>Cart</NavLink> */}
              <span>Cart</span>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Header;
