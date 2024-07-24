import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar">
      <p className="navbar__name">MyRestaurant</p>
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/reserve"
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }
        >
          Reserve
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__link--active" : "navbar__link"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
