import React from "react";
import "./Navbar.css";
import logo from "../assets/ielts-logo.png"; // your logo path

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      {/* Full-width navbar */}
      <div className="container-fluid px-5">
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="IELTS Logo"
            style={{
              width: "60px", // increased width
              height: "60px", // increased height
              objectFit: "contain", // ensures it doesn't stretch
              marginRight: "15px",
            }}
          />
          <span className="fw-bold text-primary" style={{ fontSize: "1.5rem" }}>
            IELTS Institute
          </span>
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active text-dark" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
