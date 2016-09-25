import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="clearfix">
      <h1>Damdeez</h1>
      <h2>Photo</h2>
      <nav className="clearfix">
        <div className="nav-item">
          <Link to="home" activeClassName="active">Photo</Link>
        </div>
        <div className="nav-item">
          <Link to="info" activeClassName="active">About</Link>
        </div>
      </nav>
    </header>
  )
};

export default Header;
