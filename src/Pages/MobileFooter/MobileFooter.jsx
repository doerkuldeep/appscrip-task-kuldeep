import React from "react";
import "./MobileFooter.css";
import USLogo from "../../assets/US.png";
import instaLogo from "../../assets/Insta.png";
import linkedInLogo from "../../assets/linkedIn.png";
import gLogo from "../../assets/gpay.png";
import masterLogo from "../../assets/mastercard.png";
import payLogo from "../../assets/paypal.png";
import amexLogo from "../../assets/amex.png";
import apple from "../../assets/apple.png";
import uLogo from "../../assets/opay.png";
import arrow from "../../assets/arrow.png";
import arrowup from "../../assets/arrow-up.png";
const MobileFooter = () => {
  return (
    <>
      <div className="mf-cont">
        <h4 className="mf-text1">Be the first to know</h4>
        <p className="mf-text2 mf-textWidht">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
        <div className="f-align1 ">
          <input
            type="text"
            placeholder="Enter your e-mail...."
            className="mf-input1"
          />
          <button className="mf-button">Subscribe</button>
        </div>

        <div className="mf-divider">
          <h4 className="mf-text1">Call Us</h4>
          <div className="mf-aligntext">
            <p className="mf-text2 mf-margin">+44 221 133 8676</p>
            <p className="mf-star mf-margin"></p>
            <p className="mf-text2 mf-margin">customercare@mettamuse.com</p>
          </div>
        </div>

        <div className="mf-divider1">
          <h4 className="mf-text1">Currency</h4>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <img
              className="footer-iconText"
              alt="us"
              src={USLogo}
              width="20px"
              height="20px"
            />
            <div className="footer-star"></div>
            <div className="footer-iconText">USD</div>
          </div>
        </div>

        <div className="mf-divider2">
          <h4 className="mf-text1">mettā muse</h4>
          <img src={arrow} width="16px" height="16px" alt="show Dropdown" />
        </div>
        <div className="mf-divider2">
          <h4 className="mf-text1">Quick Links</h4>
          <img src={arrow} width="16px" height="16px" alt="show Dropdown" />
        </div>
        <div className="mf-divider2">
          <h4 className="mf-text1">Follow us</h4>
          <img src={arrow} width="16px" height="16px" alt="show Dropdown" />
        </div>
        <div className="">
          <h4 className="mf-text1">mettā muse Accepts </h4>
          <div className="mf-alignIcons">
            <img src={gLogo} className="mf-icons" alt="show Dropdown" />
            <img src={masterLogo} className="mf-icons" alt="show Dropdown" />
            <img src={payLogo} className="mf-icons" alt="show Dropdown" />
            <img src={amexLogo} className="mf-icons" alt="show Dropdown" />
            <img src={apple} className="mf-icons" alt="show Dropdown" />
            <img src={uLogo} className="mf-icons" alt="show Dropdown" />
          </div>
        </div>
        <p style={{ textAlign: "center" }} className="mf-text2">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default MobileFooter;
