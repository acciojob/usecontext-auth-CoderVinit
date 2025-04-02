import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Auth = () => {
    const {isAuthenticated,toggleAuth} = useContext(AuthContext)
  return (
    <div style={{marginTop: "20px" }}>
        <h1>Click on the checkbox to get authenticated</h1>
      <p style={{fontSize:"20px"}}>
        {isAuthenticated
          ? "You are now authenticated, you can proceed"
          : "You are not authenticated"}
      </p>
      <label>
        <input type="checkbox" onChange={toggleAuth} /> I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
