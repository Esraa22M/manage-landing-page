import React from "react";
import images from "../../constants/images";
const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <a href="#">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
