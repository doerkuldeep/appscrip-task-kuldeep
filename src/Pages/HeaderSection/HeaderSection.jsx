import React from "react";
import "./HeaderSection.css";
import icon from "../../assets/grid.png";
import logo from "../../assets/Logo.png";
import icon1 from "../../assets/search.png";
import icon2 from "../../assets/heart.png";
import icon3 from "../../assets/bag.png";
import icon4 from "../../assets/profile.png";
import icon5 from "../../assets/arrow.png";
const HeaderSection = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-containerDiv">
          <img src={icon} alt="header icon" className="header-icon " />
          <p>Lorem Ipsum dolor</p>
        </div>{" "}
        <div className="header-containerDiv">
          <img src={icon} alt="header icon" className="header-icon " />
          <p>Lorem Ipsum dolor</p>
        </div>{" "}
        <div className="header-containerDiv">
          <img src={icon} alt="header icon" className="header-icon " />
          <p>Lorem Ipsum dolor</p>
        </div>
      </div>
      <div className="header-container1">
        <div className="header-alignLogo">
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        <h1 className="header-logo-text">LOGO</h1>
        <div className="header-alignIcon">
          <img className="header-icons" alt="search" src={icon1} />
          <img className="header-icons" alt="wishlist" src={icon2} />
          <img className="header-icons" alt="bag" src={icon3} />
          <img className="header-icons" alt="user" src={icon4} />
          <div className="header-alignIcon1">
            <div>Eng</div>
            <img className="header-arrow" alt="arrow" src={icon5} />
          </div>
        </div>
      </div>
      <div className="header-container2">
        <p className="underline-hover">Shop</p>
        <p className="underline-hover">Skills</p>
        <p className="underline-hover">Stories</p>
        <p className="underline-hover">About</p>
        <p className="underline-hover">Contact Us</p>
      </div>
    </>
  );
};

export default HeaderSection;
