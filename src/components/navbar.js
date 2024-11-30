import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Left section with navigation options */}
      <div className="navbar-left">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resume">Resume</Link>
      </div>

      {/* Right section with icons */}
      <div className="navbar-right">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:your-email@example.com">
          <img src="/images/gmail.jpg" alt="Gmail" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;








  

