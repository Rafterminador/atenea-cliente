import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import { Outlet } from 'react-router-dom'

const BottomNavbarDirector = () => {
    return (
        <>
            <Outlet />
            <BottomNavbar />
        </>
    )
}

export default BottomNavbarDirector