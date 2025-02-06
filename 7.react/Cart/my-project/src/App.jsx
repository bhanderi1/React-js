import React from "react";
import data from "./Components/Back/Data/Data";
import Header from "./Components/Font/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Components/Font/Router/Routes";
import Singup from "./Components/Font/SingUp/Singup";
import Product from "./Components/Font/Product/Product";

const App = () => {
  // const {productsItem} = data;
  return (
    <div>
      <Router>
        <Header/>
        <Routes  productsItems={productsItems}/>
      </Router>
    </div>
  );
};

export default App;
