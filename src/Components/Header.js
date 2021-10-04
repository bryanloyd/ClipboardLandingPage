import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <section>
        <img src={logo} alt="Clipboard Logo" className="header-logo" />
        <h3>A history of everything you copy</h3>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </section>
      <section className="header-buttons">
        <button className="header-button-ios">Download for iOS</button>
        <button className="header-button-mac">Download for Mac</button>
      </section>
    </div>
  );
};

export default Header;
