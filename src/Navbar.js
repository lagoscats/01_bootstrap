// src/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Navbar Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        {/* Profile Image */}
        <div className="profile">
          <img src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
