import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchUserProfile = async () => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        removeToken();
        setUserProfile({});
        return;
      }

      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.e;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ userProfile, loading, saveToken, removeToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error();
  }

  return context;
}
