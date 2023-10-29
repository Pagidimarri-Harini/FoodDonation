// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

// If you're using React Router for navigation
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <div className="logo">
        <img src="../images/logo.jpeg" alt="Logo" height="40" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Render "Donate Now" or "Login" based on user authentication */}
            {user && user.userType === 'donor' ? (
              <Link to="/donor-home">Donate Now</Link>
            ) : (
              <Link to="/login">Donate Now</Link>
            )}
          </li>
          <li>
            {/* Render "Need Food?" or "Login" based on user authentication */}
            {user && user.userType === 'beneficiary' ? (
              <Link to="/beneficiary-home">Need Food?</Link>
            ) : (
              <Link to="/login">Need Food?</Link>
            )}
          </li>
          <li>
            <a href="#">About Us</a>
            <ul className="submenu">
              <li>
                <a href="/#mission">Mission</a>
              </li>
              <li>
                <a href="/#vision">Vision</a>
              </li>
              <li>
                <a href="/#impact">Impact</a>
              </li>
              <li>
                <a href="/#team">Team</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Our Work</a>
            <ul className="submenu">
              <li>
                <a href="/#events">Campaigns</a>
              </li>
              <li>
                <a href="/#events">Chapters</a>
              </li>
              <li>
                <a href="/#events">Programs</a>
              </li>
            </ul>
          </li>
          <li>
            {/* Render "Login" or "Logout" based on user authentication */}
            {user ? (
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
