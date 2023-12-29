import React from "react";
import "./MobileHeader.css";
import icon from "../../assets/grid.png";
import logo from "../../assets/Logo.png";
import icon1 from "../../assets/search.png";
import icon2 from "../../assets/heart.png";
import icon3 from "../../assets/bag.png";
import icon4 from "../../assets/menu.png";
const MobileHeader = () => {
  return (
    <>
      <div className="mheader-container">
        <div className="mheader-containerDiv">
          <img src={icon} alt="header icon" className="mheader-icon " />
          <p>Lorem Ipsum dolor</p>
        </div>
      </div>
      <div className="mheader-container1">
        <div className="mheader-alignLogo">
          <img src={icon4} className="mheader-logo" alt="menu" />
          <img src={logo} className="mheader-logo" alt="logo" />
        </div>
        <h1 className="mheader-logo-text">LOGO</h1>
        <div className="mheader-alignIcon">
          <img className="mheader-icons" alt="search" src={icon1} />
          <img className="mheader-icons" alt="wishlist" src={icon2} />
          <img className="mheader-icons" alt="bag" src={icon3} />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
