import React from "react";
import images from "../../constants/images";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="flex">
          <a href="#">
            <img src={images.logo} alt="logo" />
          </a>
          <button
            className="Header__mobile-nav-toggle"
            aria-controls="primary-navigation"
          >
            <img
              className="Header_icon-humberger"
              src={images.iconHumberger}
            ></img>
            <img className="Header_icon-close" src={images.iconClose}></img>

            {/* span is an actual content for screen reader */}
            <span className="Header__visually-hidden">button</span>
          </button>
          <Navbar />
          <button className="button" type="button" aria-pressed="false">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
