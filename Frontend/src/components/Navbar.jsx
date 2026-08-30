import {
  BrainCircuit,
  ArrowRight,
  UserRound,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Navbar.css";


function Navbar({
  isLogin,
  username,
  email,
  handleLogout,
}) {

  return (

    <nav className="navbar">


      {/* =========================
          BRAND
      ========================= */}

      <Link
        to="/"
        className="brand"
      >

        <span className="brand-mark">

          <BrainCircuit size={22} />

        </span>

        <span>
          Vidya<span>Setu</span>
        </span>

      </Link>


      {/* =========================
          NAVIGATION LINKS
      ========================= */}

      <div className="nav-links">

        <a href="/#platform">
          Platform
        </a>

        <a href="/#foundation">
          Foundation
        </a>

        <a href="/#about">
          About
        </a>

      </div>


      {/* =========================
          RIGHT SIDE ACTIONS
      ========================= */}

      <div className="nav-actions">

        {isLogin ? (

          <>

            {/* =====================
                PROFILE
            ===================== */}

            <Link
              to="/profile"
              className="profile-button"
              title={email || ""}
            >

              <UserRound size={17} />

              <span>
                {username}
              </span>

            </Link>


            {/* =====================
                LOGOUT
            ===================== */}

            <button
              type="button"
              className="logout-button"
              onClick={handleLogout}
            >

              <LogOut size={17} />

              <span>
                Logout
              </span>

            </button>

          </>

        ) : (

          <>

            {/* =====================
                SIGN IN
            ===================== */}

            <Link
              to="/login"
              className="login-link"
            >
              Sign in
            </Link>


            {/* =====================
                GET STARTED
            ===================== */}

            <Link
              to="/register"
              className="nav-cta"
            >

              <span>
                Get started
              </span>

              <ArrowRight size={16} />

            </Link>

          </>

        )}

      </div>

    </nav>
  );
}


export default Navbar;