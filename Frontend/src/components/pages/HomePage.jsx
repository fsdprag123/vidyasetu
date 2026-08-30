import React from "react";
import "./HomePage.css";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import "./HomePage.css";

function HomePage({ username }) {
  return (
    <main className="home-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="home-hero">

        <div className="home-hero-content">

          <div className="home-eyebrow">
            <Sparkles size={16} />
            PERSONALIZED LEARNING
          </div>

          <h1>
            Welcome back,
            <span> {username || "Learner"}!</span>
          </h1>

          <p>
            Build the skills you need for your career.
            Discover your strengths, identify skill gaps,
            and follow a personalized learning path.
          </p>

          <div className="home-hero-actions">

            <button className="home-primary-btn">
              Complete your profile
              <ArrowRight size={17} />
            </button>

            <button className="home-secondary-btn">
              Explore skills
            </button>

          </div>

        </div>


        {/* =========================================
            HERO VISUAL
        ========================================= */}

        <div className="home-hero-visual">

          <div className="skill-circle">

            <BrainCircuit size={42} />

            <span>Skill</span>
            <strong>Growth</strong>

          </div>

          <div className="floating-card floating-card-one">

            <div className="floating-icon">
              <Target size={18} />
            </div>

            <div>
              <strong>Skill Gap</strong>
              <span>Identify your next skill</span>
            </div>

          </div>


          <div className="floating-card floating-card-two">

            <div className="floating-icon">
              <TrendingUp size={18} />
            </div>

            <div>
              <strong>Progress</strong>
              <span>Keep improving</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          QUICK STATS
      ========================================= */}

      <section className="home-stats">

        <div className="home-stat-card">

          <div className="stat-icon">
            <Target size={20} />
          </div>

          <div>
            <span>Profile</span>
            <strong>Not completed</strong>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon">
            <BrainCircuit size={20} />
          </div>

          <div>
            <span>Skills assessed</span>
            <strong>0</strong>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon">
            <BookOpen size={20} />
          </div>

          <div>
            <span>Learning paths</span>
            <strong>0</strong>
          </div>

        </div>


        <div className="home-stat-card">

          <div className="stat-icon">
            <TrendingUp size={20} />
          </div>

          <div>
            <span>Overall progress</span>
            <strong>0%</strong>
          </div>

        </div>

      </section>


      {/* =========================================
          GET STARTED
      ========================================= */}

      <section className="home-start-section">

        <div className="home-section-heading">

          <span className="section-label">
            GET STARTED
          </span>

          <h2>
            Build your professional skill profile
          </h2>

          <p>
            Complete these steps to help VidyaSetu
            understand your skills and career goals.
          </p>

        </div>


        <div className="home-step-grid">

          {/* STEP 1 */}

          <div className="home-step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              <Target size={22} />
            </div>

            <h3>
              Complete your profile
            </h3>

            <p>
              Tell us about your education,
              experience, interests, and career goals.
            </p>

            <button>
              Complete profile
              <ArrowRight size={16} />
            </button>

          </div>


          {/* STEP 2 */}

          <div className="home-step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              <BrainCircuit size={22} />
            </div>

            <h3>
              Assess your skills
            </h3>

            <p>
              Evaluate your current competencies
              and discover areas where you can improve.
            </p>

            <button>
              Start assessment
              <ArrowRight size={16} />
            </button>

          </div>


          {/* STEP 3 */}

          <div className="home-step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              <BookOpen size={22} />
            </div>

            <h3>
              Start learning
            </h3>

            <p>
              Follow a personalized learning path
              based on your skills and career goals.
            </p>

            <button>
              Explore learning
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <section className="home-bottom-cta">

        <div>

          <span>
            VIDYASETU
          </span>

          <h2>
            Your skills are the bridge to your future.
          </h2>

          <p>
            Let VidyaSetu help you identify the right
            skills and build a path toward your goals.
          </p>

        </div>

        <button>
          Get started
          <ArrowRight size={17} />
        </button>

      </section>

    </main>
  );
}

export default HomePage;