import React from "react";

const Appp = () => {
  const handleClick = (event) => {
    console.log("Button Clicked!");
    console.log("Synthetic event h ye: ",event); // SyntheticBaseEvent object
    console.log("orignl ye event",event.nativeEvent); // Original browser event
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Appp;
