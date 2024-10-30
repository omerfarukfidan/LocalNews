import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Local News Project</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/global" className="nav-link">Global News</Link>
      </nav>
    </header>
  );
}

export default Header;