import React from 'react'
import Country_data from './Component/Country_data'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country_category_page from './Component/Country_category_page';
import Register from './ServiceCode_API/Register';
import Login from './ServiceCode_API/Login';



const App = () => {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Country_data/>}/>
        <Route path="/country" element={<Country_category_page/>}/> */}
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
