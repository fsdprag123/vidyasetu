import {
  ArrowRight,
  ChartNoAxesCombined,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Landing_page.css";

const capabilities = [
  {
    icon: UserRound,
    number: "01",
    title: "Employee Profile",
    text: "Build a structured profile around your role, department, qualifications and experience.",
  },
  {
    icon: Target,
    number: "02",
    title: "Present Skills",
    text: "Capture the skills you currently have and organize them by experience and proficiency.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Learning Foundation",
    text: "Create a foundation that can later support personalized learning and development.",
  },
  {
    icon: ChartNoAxesCombined,
    number: "04",
    title: "Progress & Analytics",
    text: "Prepare your skill data for future progress tracking and workforce insights.",
  },
];

function LandingPage() {
  return (
    <div className="landing-page">

      {/* ================= HERO ================= */}

      <section className="landing-hero">

        <div className="landing-container landing-hero-grid">

          {/* LEFT */}

          <div className="landing-hero-content">

            <div className="landing-eyebrow">
              <Sparkles size={14} />
              SKILL INTELLIGENCE PLATFORM
            </div>

            <h1>
              Build a stronger workforce{" "}
              <span>from the skills you have today.</span>
            </h1>

            <p className="landing-hero-description">
              A structured platform for employee profiles, present skills,
              and learning data. Start with the foundation today and connect
              intelligent capabilities later.
            </p>

            <div className="landing-hero-actions">

              <Link
                to="/register"
                className="landing-primary-button"
              >
                Create your profile
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="landing-secondary-button"
              >
                Already have an account?
              </Link>

            </div>

            <div className="landing-trust">

              <span>
                <ShieldCheck size={16} />
                Secure authentication
              </span>

              <span>
                <ShieldCheck size={16} />
                Employee-owned profile
              </span>

            </div>

          </div>

          {/* RIGHT — PRODUCT PREVIEW */}

          <div className="landing-hero-visual">

            <div className="landing-visual-glow" />

            <div className="landing-dashboard">

              {/* Dashboard header */}

              <div className="landing-dashboard-header">

                <div>
                  <span className="landing-dashboard-label">
                    EMPLOYEE PROFILE
                  </span>

                  <h3>
                    Skill Intelligence
                  </h3>
                </div>

                <span className="landing-status-dot" />

              </div>

              {/* Profile */}

              <div className="landing-profile-preview">

                <div className="landing-avatar">
                  <UserRound size={25} />
                </div>

                <div>
                  <strong>
                    Your professional profile
                  </strong>

                  <p>
                    Role · Department · Experience
                  </p>
                </div>

              </div>

              {/* Skills header */}

              <div className="landing-skill-heading">

                <span>
                  Present skills
                </span>

                <span>
                  3 skills
                </span>

              </div>

              {/* Skill bars */}

              <div className="landing-skill-list">

                <div className="landing-skill">
                  <div className="landing-skill-name">
                    JavaScript
                  </div>

                  <div className="landing-skill-track">
                    <span
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>

                <div className="landing-skill">
                  <div className="landing-skill-name">
                    Communication
                  </div>

                  <div className="landing-skill-track">
                    <span
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>

                <div className="landing-skill">
                  <div className="landing-skill-name">
                    Project Management
                  </div>

                  <div className="landing-skill-track">
                    <span
                      style={{ width: "54%" }}
                    />
                  </div>
                </div>

              </div>

              {/* Future capability */}

              <div className="landing-future-card">

                <div className="landing-future-icon">
                  <Sparkles size={16} />
                </div>

                <div>

                  <strong>
                    Intelligent learning — coming next
                  </strong>

                  <p>
                    Skill-gap analysis and recommendations
                    will build on this foundation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOUNDATION ================= */}

      <section
        className="landing-foundation"
        id="foundation"
      >

        <div className="landing-container">

          <div className="landing-foundation-grid">

            <div className="landing-foundation-item">
              <span>01</span>
              <strong>Profile</strong>
              <p>Who you are</p>
            </div>

            <div className="landing-foundation-item">
              <span>02</span>
              <strong>Skills</strong>
              <p>What you know</p>
            </div>

            <div className="landing-foundation-item">
              <span>03</span>
              <strong>Learning</strong>
              <p>Where you grow</p>
            </div>

            <div className="landing-foundation-item">
              <span>04</span>
              <strong>Insights</strong>
              <p>What comes next</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PLATFORM ================= */}

      <section
        className="landing-platform"
        id="platform"
      >

        <div className="landing-container">

          <div className="landing-section-heading">

            <div>

              <div className="landing-eyebrow">
                THE FOUNDATION
              </div>

              <h2>
                Everything starts with good skill data.
              </h2>

            </div>

            <p>
              We're building the platform in stages. The first
              release focuses on authentication, employee
              information and present skills.
            </p>

          </div>


          <div className="landing-capability-grid">

            {capabilities.map(
              ({
                icon: Icon,
                number,
                title,
                text,
              }) => (

                <article
                  className="landing-capability-card"
                  key={title}
                >

                  <div className="landing-card-top">

                    <div className="landing-capability-icon">
                      <Icon size={21} />
                    </div>

                    <span>
                      {number}
                    </span>

                  </div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                  <div className="landing-card-arrow">
                    <ArrowRight size={17} />
                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section
        className="landing-cta-section"
        id="about"
      >

        <div className="landing-container">

          <div className="landing-cta">

            <div>

              <div className="landing-eyebrow">
                READY TO BEGIN?
              </div>

              <h2>
                Create your professional skill profile.
              </h2>

              <p>
                Register now. We'll ask for the information
                needed to build your first profile.
              </p>

            </div>

            <Link
              to="/register"
              className="landing-primary-button"
            >
              Get started
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


    

    </div>
  );
}

export default LandingPage;