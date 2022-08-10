import React from "react";

const fName = "Juan Jose";
const sName = "Guzman Zapata";

function Heading() {
  return (
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">
        {fName + " " + sName}'s Favorite Foods
      </h1>
    </div>
  );
}

export default Heading;
export { fName, sName };
