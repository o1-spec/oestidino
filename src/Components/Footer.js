import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="footer-box">
          <h6>Address</h6>
          <span>2972 Windmill Road Santa Ana. Bariga Lagos</span>
        </div>
        <div className="footer-box">
          <h6>Info</h6>
          <ul className="footer-links">
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Experts</Link>
            </li>
            <li>
              <Link to="/">Articles</Link>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
            <li>
              <Link to="/">Contents</Link>
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h6>Contact Us</h6>
          <ul className="footer-links">
            <li>
              <Link to="/">+234 705 826 6972</Link>
            </li>
            <li>
              <Link to="/">oluwafemionadokun@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="footer-box icon">
          <div className="footer-icon">
            <Link to="/">
              <img src="images/facebook-svgrepo-com.svg" alt="facebook" />
            </Link>
          </div>
          <div className="footer-icon">
            <Link to="/">
              <img src="images/instagram-svgrepo-com.svg" alt="Instagram" />
            </Link>
          </div>
          <div className="footer-icon">
            <Link to="/">
              <img src="images/youtube-svgrepo-com.svg" alt="Youtube" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-name">
        <h1>O-e-s-t-e</h1>
      </div>
    </div>
  );
}

export default Footer;
