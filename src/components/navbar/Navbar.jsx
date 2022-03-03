/** @format */

import React from "react";
import "./nav.styles.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="nav-logo"></div>
        <div className="nav-items">
          <ul>
            <li>Our Solutions</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Upload</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
