import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Dashboard</h1>
    <div className="links">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/gallery" className="link">
        View Files
      </NavLink>
    </div>
  </header>
);

export default Header;