import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./components/pages/LandingPage";
import Register from "./components/pages/Register";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-main">

        <Routes>

          <Route
            path="/"
            element={
              <div className="page-content">
                <LandingPage />
              </div>
            }
          />

          <Route
            path="/register"
            element={<Register />}
          />
          
        </Routes>
      </main>

        <Footer />
    </div>
  );
}

export default App;