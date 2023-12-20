import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderNav() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
    const toggleNavbar = (e) => {
      e.preventDefault();
      setIsNavbarOpen(!isNavbarOpen);
    }
    ;
  return (
    <div className="headerNav">
      <div className="head">
        <h3>Oestedino</h3>
        <ul className={`nav-links ${isNavbarOpen ? 'open' : ''}`}>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Portfolio</Link>
          </li>
          <li className="nav-link">
            <Link to="/">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Lets Talk &rarr;;</Link>
          </li>
        </ul>
        <div className="mobile-nav">
          <Link onClick={(e)=> toggleNavbar(e)}>
            <img src="images/menu-svgrepo-com.svg" alt="" />
          </Link>
        </div>
      </div>
      <h2>Oastedino</h2>
      <div className="head-info">
        <p>
          <span>We design</span> <span> every project</span>{" "}
          <span>as one-off</span>
        </p>
        <Link to="/">Explore Work &rarr;</Link>
      </div>
    </div>
  );
}

export default HeaderNav;
