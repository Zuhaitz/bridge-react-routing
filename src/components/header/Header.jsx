import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <p className="navbar__name">MyRestaurant</p>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
