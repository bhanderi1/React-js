import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Bolg from './Pages/Bolg'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Erroe404 from './Pages/Erroe404'
import OrderSummry from './Pages/OrderSummry'
import Product from './Pages/Product'
import Productfeature from './Pages/Productfeature'
import NewProduct from './Pages/NewProduct'
// import AboutUs from './Pages/AboutUs'
import UsersMain from './Pages/UsersMain'
import User from './Pages/User'
import Admins from './Pages/Admins'
import Profile from './Pages/Profile'
import { AuthProvider } from './Pages/Auth'
import Login from './Pages/Login'
import ReqiureAuth from './Pages/ReqiureAuth'
const AboutLazy = React.lazy(() => import('./Pages/AboutUs'))

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={
              <React.Suspense fallback="Loding......">
                <AboutLazy />
              </React.Suspense>
            } />
            <Route path="bolg" element={<Bolg />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path='ordersummry' element={<OrderSummry />} />
            <Route path='product' element={
              <ReqiureAuth>
                <Product />
              </ReqiureAuth>
            }>
              <Route index element={<Productfeature />} />
              <Route path="newproduct" element={<NewProduct />} />
            </Route>
            <Route path='user' element={<User />}>
              <Route path=':userId' element={<UsersMain />} />
              <Route path='admin' element={<Admins />} />
            </Route>
            <Route path='profile' element={
              <ReqiureAuth>
                <Profile />
              </ReqiureAuth>
            } />
            <Route path='login' element={<Login />} />
            <Route path="*" element={<Erroe404 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
