import React from "react";

let greetings;

const currentTime = new Date().getHours();

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greetings = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greetings = "Good Afeternoon";
  customStyle.color = "green";
} else {
  greetings = "Good Night";
  customStyle.color = "blue";
}

function SecondHeading() {
  return (
    <div>
      <h2 className="heading" style={customStyle}>
        {greetings}
      </h2>
    </div>
  );
}

export default SecondHeading;
