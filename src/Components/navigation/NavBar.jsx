import React, { useEffect, useState } from 'react'
import { Link, useInRouterContext, useNavigate } from 'react-router'

function NavBar() {
    const [loggedIn,setLoggedIn] = useState(false)
const navigate =useNavigate()
    const checkLoginStatus = ()=>{
     const token =localStorage.getItem("token")
     if(token && token.length !== 0){
        setLoggedIn(true)
     }
    }
    const signOutUser =()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
useEffect(()=>{
   
    checkLoginStatus()
},[])
  return (
    <div className="w-full flex justify-between p-4">
      <p>User Media</p>
      <p className="bg-indigo-600 p-2 rounded-lg">
        <Link to="/profile">Profile</Link>
      </p>
      {loggedIn ? (
        <button onClick={signOutUser} className="bg-indigo-600 p-2 rounded-lg">
          Sign out
        </button>
      ) : (
        <p className="bg-indigo-600 p-2 rounded-lg">
          <Link to="/login">Sign in</Link>
        </p>
      )}
    </div>
  );
}

export default NavBar