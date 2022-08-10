import React from "react";
import Copyright from "./CopyRight.jsx";
import Heading from "./Heading.jsx";
import MenuPics from "./MenuPics.jsx";
import SecondHeading from "./SecondHeading.jsx";
import UnorderedList from "./UnorderedList.jsx";

function App() {
  return (
    <div>
      <Heading />
      <UnorderedList />
      <MenuPics />
      <SecondHeading />
      <Copyright />
    </div>
  );
}

export default App;
