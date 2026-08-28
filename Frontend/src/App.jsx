import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/LandingPage";

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
        </Routes>
      </main>
    </div>
  );
}

export default App;