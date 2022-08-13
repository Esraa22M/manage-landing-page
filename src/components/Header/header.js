import React from "react";
import images from "../../constants/images";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <a href="#">
          <img src={images.logo} alt="logo" />
        </a>
        <Navbar/>
      <button className="Header__button" type="button" aria-pressed="false">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
