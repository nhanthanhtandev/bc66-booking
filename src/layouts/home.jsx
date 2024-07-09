import React from 'react'
import { Outlet } from 'react-router-dom'
/*../components/footer/footer*/
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import './index.scss'

export default function HomeLayout() {
    return (
        <div className="bg__wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
