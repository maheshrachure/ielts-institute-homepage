import React from "react";
import "./Hero.css";
import bannerImg from "../assets/ielts-banner.jpg"; // we’ll add this image

function Hero() {
  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left content */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="hero-title">Crack IELTS with Confidence 🚀</h1>
            <p className="hero-subtext mt-3">
              Join our expert-led training program with practice tests, AI band
              score analysis, and personalized feedback.
            </p>
            <button className="btn btn-primary btn-lg mt-3">Get Started</button>
          </div>

          {/* Right image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={bannerImg}
              alt="IELTS Preparation"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
