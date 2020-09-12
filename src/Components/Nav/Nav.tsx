import React from "react";
import { NavLink } from "react-router-dom";
import menu from "./menu.png";
import "./Nav.css";
import Logo from "./logo.png";
const Nav = () => {
  return (
    <div className="NavContainer">
      <nav className="navbar">
        <label
          className="navbar-toggle"
          id="js-navbar-toggle"
          htmlFor="chkToggle"
        >
          <img src={menu} alt="Menu" />
        </label>
        <input type="checkbox" id="chkToggle"></input>
        <ul className="main-nav">
          <li>
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-links">
              Projects
            </NavLink>
          </li>
        </ul>
        <div className="MyLogo">
          <img src={Logo} alt="Logo" />
        </div>
      </nav>
    </div>
  );
};
export default Nav;
