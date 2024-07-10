import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const result = useSelector((state) => state.Reducer);
  console.warn("HeaderData called", result);
  return (
    <div className="h-24 bg-pink-500 flex justify-between items-center px-20 text-white relative text-bold">
      <NavLink to="/">shop</NavLink>
      <NavLink to="/Cart">
        <div className="flex ">
          <CiShoppingCart  className="text-2xl"/>
          <span className="">{result.length}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
