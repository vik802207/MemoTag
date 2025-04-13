import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar({ toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        MemoTag
      </motion.div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/problem">Problem</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/solution">Solution</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/cta">Call to Action</Link>
        </li>
        <li>
          <button onClick={toggleDarkMode} className="toggle-btn">
            🌙 / ☀️
          </button>
        </li>
      </ul>
    </nav>
  );
}
