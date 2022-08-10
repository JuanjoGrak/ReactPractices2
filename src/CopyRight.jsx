import React from "react";
import { fName, sName } from "./Heading.jsx";

var currentYear = new Date().getFullYear();

function CopyRight() {
  return (
    <div>
      <p>Created by {fName + " " + sName}</p>
      <p>Copyright {currentYear}</p>
    </div>
  );
}

export default CopyRight;
