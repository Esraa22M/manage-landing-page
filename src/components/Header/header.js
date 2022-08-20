import React , {useState} from "react";
import images from "../../constants/images";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  let [navFlag,setNavFlag] = useState(false)
  
  return (
    <header className="primary-header" datatype={navFlag?"expanded":""}>
      <div className="container">
        <div className="Header__nav-wrapper">
          <a href="#">
            <img src={images.logo} alt="logo" />
          </a>
          <button
            className="Header__mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={navFlag?true:false}
            onClick={()=>setNavFlag(!navFlag)}
          >
            <img
              className="Header_icon-humberger"
              src={navFlag? images.iconClose: images.iconHumberger}
            ></img>
            {/* <img className="Header_icon-close" src={images.iconClose}></img> */}

            {/* span is an actual content for screen reader */}
            <span className="Header__visually-hidden">button</span>
          </button>
          <Navbar navFlag={navFlag}/>
          <button className="button Header_btn-sm-none" type="button" aria-pressed="false">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
