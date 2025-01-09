// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close state
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/landing" style={{ textDecoration: "none", color: "#000" }}>
          LashTech
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="menuIcon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`navLinks ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/landing" className="link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/book" className="link" onClick={() => setIsOpen(false)}>
            Book Now
          </Link>
        </li>
        <li>
          <a href="#services" className="link" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="link" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;