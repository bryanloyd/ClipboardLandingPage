import React from "react";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" className="footer-logo" />
      <p>FAQ</p>
      <p>Contact Us</p>
      <p>Privacy Policy</p>
      <p>Press Kit</p>
      <p>Install Guide</p>
      <div>
        <div className="footer-social">
          <img src={facebook} alt="" />

          <img src={twitter} alt="" />

          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
