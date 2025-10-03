import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="footer-title">IELTS Institute</h5>
            <p className="footer-text">
              Helping students achieve their dream IELTS scores with expert
              guidance, practice, and modern tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-sm-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-sm-6 mb-4" id="contact">
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: info@ieltsinstitute.com</p>
            <p>Phone: +91 9000650826</p>
            <p>Location: Hyderabad, India</p>

            {/* Social icons */}
            <div className="social-icons mt-2">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center footer-bottom">
          <p>
            © {new Date().getFullYear()} IELTS Institute. All rights reserved.
          </p>

          {/* Back to Top */}
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
