import React from "react";
import images from "../../constants/images";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <a href="#">
          <img src={images.logo} alt="logo" />
          <Navbar/>
        </a>
      </div>
    </header>
  );
};

export default Header;
