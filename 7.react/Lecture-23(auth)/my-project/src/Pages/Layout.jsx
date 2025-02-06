import React from 'react'
import Navbar from '../Component/Navbar'
import { AuthProvider } from './Auth'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
            <AuthProvider>
                <Navbar />
                <Outlet />
            </AuthProvider>
    )
}

export default Layout
