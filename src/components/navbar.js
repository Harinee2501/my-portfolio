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
      </div>

      {/* Right section with icons */}
      <div className="navbar-right">
        <a href="https://github.com/Harinee2501" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/harinee-manikandan/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="harineemanikandan@gmail.com">
          <img src="/images/gmail.jpg" alt="Gmail" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;








  

