import React from "react";
import "../App.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p className="header-logo">Error</p>
      </div>
      <div className="navlink">
        <ul className="items">
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">About</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
