import React from "react";
import "../App.css";
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <p>Copyright &copy; {date.getFullYear()}</p>
    </div>
  );
};

export default Footer;
