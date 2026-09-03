import { createContext, useContext, useEffect, useState } from "react"
const AuthContext = createContext(null) //context initialization

export function AuthProvider({ children }) {
    const [userProfile, setUserProfile] = useState({})
    const [loading, setLoading] = useState(false)
    const fetchUserProfile = async () => {
        setLoading(true)

        const token = localStorage.getItem("token")
        if (!token) {
            return
        }

        const response = await fetch("https://dummyjson.com/users/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            credentials: "include", 
            })
        
        if (!response.ok) {
   removeToken()         
            return
        }
        const data = await response.json()
        setUserProfile(data)
        setLoading(false)
    }
    useEffect(() => {
        fetchUserProfile()
    }, [])
    
    const saveToken = (token) => {
        localStorage.setItem("token", token)
    }

    const removeToken = () => {
        localStorage.removeItem("token")
    }

    return (<AuthContext.Provider value={{ userProfile, loading, saveToken, removeToken }}>
        {children}
    </AuthContext.Provider>)
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        
    }
    return context
}
    
