import React from "react";
import google from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import hp from "../images/logo-hp.png";
import vector from "../images/logo-vector-graphics.png";

const Companies = () => {
  return (
    <div className="companies">
      <div>
        <img src={google} alt="Google Logo" />
      </div>
      <div>
        <img src={ibm} alt="IBM Logo" />
      </div>
      <div>
        <img src={microsoft} alt="Microsoft Logo" />
      </div>
      <div>
        <img src={hp} alt="HP Logo" />
      </div>
      <div>
        <img src={vector} alt="Vector Graphics Logo" />
      </div>
    </div>
  );
};

export default Companies;
