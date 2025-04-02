
import React from "react";
import './../styles/App.css';
import AuthProvider from "./AuthProvider";
import Auth from "./Auth";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
       <AuthProvider>
          <Auth/>
       </AuthProvider>
    </div>
  )
}

export default App
