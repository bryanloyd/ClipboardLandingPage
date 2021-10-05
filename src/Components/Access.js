import React from "react";
import devices from "../images/image-devices.png";

const Access = () => {
  return (
    <div className="access">
      <h4>Access Clipboard Anywhere</h4>
      <p>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src={devices} alt="" />
    </div>
  );
};

export default Access;
