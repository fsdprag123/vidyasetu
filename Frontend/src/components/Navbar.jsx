import { BrainCircuit, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        <span className="brand-mark">
          <BrainCircuit size={22} />
        </span>

        <span>
          Vidya<span>Setu</span>
        </span>
      </Link>

      <div className="nav-links">
        <a href="#platform">Platform</a>
        <a href="#foundation">Foundation</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Sign in
        </Link>

        <Link to="/register" className="nav-cta">
          Get started
          <ArrowRight size={16} />
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;