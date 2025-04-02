import React, { createContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    const toggleAuth = (event)=>{
        setIsAuthenticated(event.target.checked)
    }

  return (
    <AuthContext.Provider value={{isAuthenticated,toggleAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}