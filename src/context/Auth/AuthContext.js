import React, { createContext, useState, useContext, useEffect } from "react";

const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState")) || false;
    setAuth(userData);
    console.log("First time");
  }, []);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(auth));
    console.log("second time");
  }, [auth]);

  return <AuthProvider.Provider value={{ auth, setAuth }}>{children}</AuthProvider.Provider>;
};

export default AuthContext;

export const useAuth = () => useContext(AuthProvider);
