import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-item">Home</a>
      <a href="/scan" className="nav-item">Scan</a>
      <a href="/profile" className="nav-item">Profile</a>
    </nav>
  );
}

export default Navbar;
