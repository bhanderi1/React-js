import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import AboutUs from './Pages/AboutUs'
import Layout from './Pages/Layout'
const AboutLazy = React.lazy(() => import('./Pages/AboutUs'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'aboutus', element: <AboutLazy /> },
      { path: 'Contact', element: <Contact /> },
      { path: 'shop', element: <Shop /> },
      { path: 'bolg', element: <Bolg /> },
      { path: 'ordersummry', element: <OrderSummry /> },
      { path: 'product', element: <ReqiureAuth><Product /></ReqiureAuth>, children: [{ path: 'productfeature', element: <ReqiureAuth><Product /></ReqiureAuth> }, { path: 'newproduct', element: <NewProduct /> },] },
      { path: 'user', element: <User />, children: [{ path: ':usreId', element: <UsersMain /> }, { path: 'admin', element: <Admins /> },] },
      { path: 'profile', element: <ReqiureAuth><Profile /></ReqiureAuth> },
      { path: 'login', element: <Login /> },
      { path: '/*', element: <Erroe404 /> }
    ]
  },

])

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <AuthProvider>
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
              < ReqiureAuth>
                <Profile />
              </ReqiureAuth>
            } />
            <Route path='login' element={<Login />} />
            <Route path="*" element={<Erroe404 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider> */}
    </>
  )
}

export default App
