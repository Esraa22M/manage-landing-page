import React from "react";
import images from "../../constants/images";
import SocialLinks from "../SocialLinks";
import FooterNavigation from "../FooterNavigation";
import FooterForm from "../FooterForm";
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-primary-100">
      <div className="container">
        <div className="even-columns">
          <div>
            <a href="#">
              <img src={images.logo} alt="logo" />
            </a>
          <SocialLinks/>
          </div>
         <FooterNavigation/>
         <FooterForm/>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
