import React from "react";
import "./Hero.css";
import bannerImg from "../assets/ielts-banner.jpg";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Animated Background Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Left Content */}
        <div className="hero-text">
          <h1 className="hero-title">Crack IELTS with Confidence 🚀</h1>
          <p className="hero-subtext">
            Join our expert-led training program with practice tests, AI band
            score analysis, and personalized feedback.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={bannerImg} alt="IELTS Preparation" />
        </div>
      </div>

      {/* Downward Arrow */}
      <div className="scroll-down">&#x25BC;</div>
    </section>
  );
}

export default Hero;
