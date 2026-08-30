import { useEffect, useState } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";


function App() {

  // =================================
  // Authentication State
  // =================================

  const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState(null);

  const [email, setEmail] = useState(null);


  // =================================
  // Verify Login With Backend
  // =================================

  const verifyLogin = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/user/me",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (data.isLogin) {

        setIsLogin(true);

        setUsername(data.username);

        setEmail(data.email);

      } else {

        setIsLogin(false);

        setUsername(null);

        setEmail(null);

      }

    } catch (error) {

      console.error(
        "Authentication verification failed:",
        error
      );

      setIsLogin(false);

      setUsername(null);

      setEmail(null);

    }
  };


  // =================================
  // Check Login When App Starts
  // =================================

  useEffect(() => {

    verifyLogin();

  }, []);


  // =================================
  // Logout
  // =================================

  const handleLogout = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/user/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );


      if (response.ok) {

        setIsLogin(false);

        setUsername(null);

        setEmail(null);

      }

    } catch (error) {

      console.error(
        "Logout error:",
        error
      );

    }
  };


  return (
    <>

      {/* =================================
          NAVBAR
      ================================= */}

      <Navbar
        isLogin={isLogin}
        username={username}
        email={email}
        handleLogout={handleLogout}
      />


      {/* =================================
          ROUTES
      ================================= */}

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={
            <Login
              setIsLogin={setIsLogin}
              setUsername={setUsername}
              setEmail={setEmail}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register/>
          }
        />

      </Routes>

    </>
  );
}


export default App;