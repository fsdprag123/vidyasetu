import { useState } from "react";
import { ArrowRight, BrainCircuit, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  // Check password confirmation
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Check terms
  if (!formData.terms) {
    alert("Please accept the terms and conditions.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:3000/user/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Registration failed.");
      return;
    }

    console.log("Registration successful:", data);

    alert("Account created successfully!");

    // Reset form after successful registration
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });

  } catch (error) {
    console.error("Registration error:", error);

    alert(
      "Unable to connect to the server. Please try again."
    );
  }
};

  return (
    <main className="register-page">

      <div className="register-container">

        {/* ================= BRAND ================= */}

        <Link to="/" className="register-brand">
          <span className="register-brand-icon">
            <BrainCircuit size={20} />
          </span>

          <span>
            Skill<span>Intel</span>
          </span>
        </Link>


        {/* ================= FORM CARD ================= */}

        <section className="register-card">

          <div className="register-heading">

            <div className="register-eyebrow">
              CREATE ACCOUNT
            </div>

            <h1>
              Create your account
            </h1>

            <p>
              Start your SkillIntel profile with a few basic details.
            </p>

          </div>


          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* Full Name */}

            <div className="register-field">

              <label htmlFor="name">
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </div>


            {/* Email */}

            <div className="register-field">

              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

            </div>


            {/* Password */}

            <div className="register-field">

              <label htmlFor="password">
                Password
              </label>

              <div className="register-password">

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  minLength={8}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
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

              <span className="register-hint">
                Use at least 8 characters.
              </span>

            </div>


            {/* Confirm Password */}

            <div className="register-field">

              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="register-password">

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password again"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* Terms */}

            <label className="register-terms">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />

              <span>
                I agree to the{" "}
                <a href="#terms">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy">
                  Privacy Policy
                </a>.
              </span>

            </label>


            {/* Submit */}

            <button
              type="submit"
              className="register-submit"
            >
              Create account
              <ArrowRight size={18} />
            </button>

          </form>


          {/* Login */}

          <div className="register-login">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>

        </section>


        {/* Footer */}

        <p className="register-footer">
          Your account information is securely stored.
        </p>

      </div>

    </main>
  );
}

export default Register;