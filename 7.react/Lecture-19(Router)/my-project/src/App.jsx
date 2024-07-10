import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Bolg from './Pages/Bolg'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Shop from './Pages/Shop'
import Erroe404 from './Pages/Erroe404'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="bolg" element={<Bolg />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/*" element={<Erroe404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
