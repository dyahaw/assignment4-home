// Header.js
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PeopleContext } from '../context/PeopleContext';
import './Header.css';

const Header = () => {
  const { isLoggedIn, login, logout } = useContext(PeopleContext);
  const navigate = useNavigate();

  const handleAuthToggle = () => {
    if (isLoggedIn) {
      logout();
      navigate('/home');
    } else {
      login();
      navigate('/team');
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <ul className="nav-links">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          {isLoggedIn && <li><NavLink to="/team">My Team</NavLink></li>}
          {isLoggedIn && <li><NavLink to="/movies">Movies</NavLink></li>}
        </ul>
        <button className="auth-button" onClick={handleAuthToggle}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
