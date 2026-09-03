import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useHello } from '../context/HelloContext'

function LoginPage() {
    const navigate = useNavigate()
  const location = useLocation()
  
    const [loginDetails,setLoginDetails]= useState({
        username:"",
        password:""
    })

    const handleForm =(e)=>{
e.preventDefault();
setLoginDetails((prev)=>({...prev,[e.target.name]:e.target.value}))

    }

   async function loginUser(){
    const response = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...loginDetails,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });
    if(!response.ok){
      return
    }
    const data = await response.json()
    localStorage.setItem("token",data.accessToken)
     const route = location?.state?.from || "/"
    navigate(route)
    }


  return (
    <div className='flex flex-col'>

        <input value={loginDetails.username} placeholder='Enter username' name='username' onChange={(e)=>handleForm(e)}/>
        <input value={loginDetails.password} type='password' name='password' placeholder='Enter password' onChange={(e)=>handleForm(e)}/>
        <button onClick={loginUser} className='p-4 bg-indigo-500'>Submit</button>
    </div>
  )
}

export default LoginPage