import React from "react";
import "./FooterSection.css";
import USLogo from "../../assets/US.png";
import instaLogo from "../../assets/Insta.png";
import linkedInLogo from "../../assets/linkedIn.png";
import gLogo from "../../assets/gpay.png";
import masterLogo from "../../assets/mastercard.png";
import payLogo from "../../assets/paypal.png";
import amexLogo from "../../assets/amex.png";
import apple from "../../assets/apple.png";
import uLogo from "../../assets/opay.png";
const FooterSection = () => {
  return (
    <>
      <div className="footer-cont">
        <div className="footer-contAlign">
          <div className="footer-contDiv1">
            <h4 className="footer-text1">BE the First To know</h4>
            <p className="footer-text2">Sign up for updates from mettā muse.</p>
            <div className="footer-alignIB">
              <input
                type="text"
                placeholder="Enter you e-mail..."
                className="footer-input1"
              />
              <button className="footer-btn1">Subscribe</button>
            </div>
          </div>
          <div className="footer-contDiv2">
            <h4 className="footer-text1">Contact Us</h4>
            <p className="footer-text2">+44 221 133 5380</p>
            <p className="footer-text2">custmomercare@mettamuse.com</p>
            <h4 className="footer-text1">currency</h4>
            <p className="footer-text2">+44 221 133 5380</p>
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
            <p className="footer-text3">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-contM">
        <div className="footer-contDiv1">
          <div className="footer-contAlign1">
            <div>
              <h4 className="footer-text1">Metta Muse</h4>
              <p className="footer-text2">About Us</p>
              <p className="footer-text2">Stories</p>
              <p className="footer-text2">Artisans</p>
              <p className="footer-text2">Boutiques</p>
              <p className="footer-text2">Contact Us</p>
              <p className="footer-text2">EU Compliance Docs</p>
            </div>
            <div>
              <h4 className="footer-text1">Quick Links</h4>
              <p className="footer-text2">Orders & Shipping</p>
              <p className="footer-text2">Join/Login as a Seller</p>
              <p className="footer-text2">Payment & Pricing</p>
              <p className="footer-text2">Return & Refunds</p>
              <p className="footer-text2">FAQs</p>
              <p className="footer-text2">Privacy Policy</p>
              <p className="footer-text2">Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="footer-contDiv2">
          <h4 className="footer-text1">Follow US</h4>

          <div className="footer-aalignIcons">
            <img width="32px" alt="instagram" src={instaLogo} />{" "}
            <img width="32px" alt="linkedIn" src={linkedInLogo} />
          </div>

          <h4 style={{ margin: "32px 0px 16px 0px" }} className="footer-text1">
            mettā muse Accepts
          </h4>
          <div className="footer-aalignIcons">
            <img width="64px" height="32px" alt="instagram" src={gLogo} />{" "}
            <img width="64px" height="32px" alt="linkedIn" src={masterLogo} />
            <img
              width="64px"
              height="32px"
              alt="instagram"
              src={payLogo}
            />{" "}
            <img width="64px" height="32px" alt="linkedIn" src={amexLogo} />
            <img width="64px" height="32px" alt="instagram" src={apple} />{" "}
            <img width="64px" height="32px" alt="linkedIn" src={uLogo} />
          </div>
        </div>
      </div>
      <p
        style={{
          backgroundColor: "#000",
          margin: 0,
          padding: "16px 0px",
          textAlign: "center",
        }}
        className="footer-text2"
      >
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </>
  );
};

export default FooterSection;
