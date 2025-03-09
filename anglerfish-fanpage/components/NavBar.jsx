import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NavBar.css';

const NavBar = () => {
    return (
        <header className='navbar'>
            <div className="navbar-brand">
        <h1 className="navbar-title">Anglerfish Fanpage</h1>
      </div>
      <nav>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
        </header>

    )
};

export default NavBar;