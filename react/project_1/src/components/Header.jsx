import React from "react";
import "../App.css";
const Header = () => {
  return (
    <nav className="header">
      <p>Error</p>
      <ul className="header-list">
        <li className="list">
          <a href="#">Home</a>
        </li>
        <li className="list">
          <a href="#">About</a>
        </li>
        <li className="list">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
