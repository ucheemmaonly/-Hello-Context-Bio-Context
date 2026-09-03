import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginDetails, setLoginDetails] = useState({
    username: "emilys",
    password: "emilyspass",
  });

  const handleForm = (e) => {
    setLoginDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUser = async () => {
    try {
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...loginDetails,
          expiresInMins: 30,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Login failed:", error);
        return;
      }

      const data = await response.json();

      console.log("Login successful:", data);

    
      localStorage.setItem("token", data.accessToken);

      
      const route = location.state?.from || "/";

      navigate(route);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <input value={loginDetails.username} placeholder="Enter username" name="username"
        onChange={handleForm}/>

      <input value={loginDetails.password} type="password" name="password" placeholder="Enter password"
        onChange={handleForm}/>

      <button onClick={loginUser} className="p-4 bg-indigo-500">
        Submit
      </button>
    </div>
  );
}

export default LoginPage;
