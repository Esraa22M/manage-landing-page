import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="Navbar__primary-navigation">
      <ul role="list" className="Navbar__primary-list" aria-label="primary navigation list" id="primary-navigation">
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Community</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
