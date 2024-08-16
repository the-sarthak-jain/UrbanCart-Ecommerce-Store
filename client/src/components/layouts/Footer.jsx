import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Info Section */}
          <div className="col-md-4 mb-4">
            <NavLink className="navbar-brand text-white" to="/">
              <img
                src={logo}
                className="mb-3"
                alt="Logo"
                style={{ width: "150px" }}
              />
            </NavLink>
            <p>
              We are committed to providing the best products at the most
              affordable prices. Our mission is to offer a wide selection of
              high-quality items to meet all your needs.
            </p>
            <NavLink to="/" className="btn btn-primary">
              Go to Home
            </NavLink>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-light">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-light">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="text-light">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="text-light">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="text-light">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Email: mail.sarthakjain@gmail.com</p>
            <p>Phone: +91 9871835383</p>
            <div className="d-flex">
              <NavLink
                to="https://github.com/the-sarthak-jain"
                className="text-light me-3"
              >
                <i class="fa-brands fa-github"></i>
              </NavLink>
              <NavLink
                to="https://www.quora.com/profile/Sarthak-Jain-1055"
                className="text-light me-3"
              >
                <i class="fa-brands fa-quora"></i>
              </NavLink>
              <NavLink
                to="https://instagram.com/sarthakjain.108"
                className="text-light me-3"
              >
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/sarthak-jainn/"
                className="text-light me-3"
              >
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Sarthak Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;