import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

import "./Login.css";

export default function Login({
  setIsLogin,
  setUsername,
  setEmail,
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(
      "https://vidyasetu-backend-inhe.onrender.com/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      }
    );

    // Get response as text first
    const text = await response.text();

    console.log("Status:", response.status);
    console.log("Response:", text);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      alert("Backend returned an invalid response.");
      return;
    }

    if (!response.ok) {
      alert(data.message || "Invalid email or password");
      return;
    }

    // ==============================
    // LOGIN SUCCESS
    // ==============================

    console.log("Login successful:", data);

    setIsLogin(true);
    setUsername(data.user.name);
    setEmail(data.user.email);

    setFormData({
      email: "",
      password: "",
      remember: false,
    });

    setShowPassword(false);

    navigate("/");
  } catch (error) {
    console.error("Login error:", error);

    alert(
      "Unable to connect to the server. Check the browser console."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-container">

      <div className="login-card">

        {/* Header */}

        <div className="login-header">

          <Link
            to="/"
            className="brand-logo"
          >

            <div className="logo-icon">
              <BrainCircuit size={22} />
            </div>

            <span>
              Skill
              <span className="brand-highlight">
                Intel
              </span>
            </span>

          </Link>

          <h1>
            Welcome back
          </h1>

          <p>
            Sign in to continue to your
            professional skill profile.
          </p>

        </div>


        {/* Form */}

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email address
            </label>

            <div className="input-field">

              <Mail
                className="field-icon left"
                size={18}
              />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Password */}

          <div className="form-group">

            <div className="label-row">

              <label htmlFor="password">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot password?
              </Link>

            </div>

            <div className="input-field">

              <LockKeyhole
                className="field-icon left"
                size={18}
              />

              <input
                id="password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >

                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

              </button>

            </div>

          </div>


          {/* Remember Me */}

          <div className="form-options">

            <label className="remember-label">

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              <span>
                Remember me
              </span>

            </label>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >

            <span>
              {loading
                ? "Signing in..."
                : "Sign in"}
            </span>

            {!loading && (
              <ArrowRight size={18} />
            )}

          </button>

        </form>


        {/* Footer */}

        <div className="login-footer">

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Create an account
          </Link>

        </div>

      </div>

    </div>
  );
}