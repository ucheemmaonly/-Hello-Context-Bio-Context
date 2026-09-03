import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import NavBar from '../../Components/navigation/NavBar'
import { useAuth} from '../../context/AuthContext'


function LayoutPage() {
  const { userProfile } = useAuth()
  
  if (userProfile == undefined) {
    return <Navigate to="/login" replace state={{from: location.pathname}}/>
  }

  return (
    <div className='w-full'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPage