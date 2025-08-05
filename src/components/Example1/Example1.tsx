import React, { useState } from "react";
import { Button1, Button2 } from "./components";

const Example1 = () => {
  "use memo";
  const [state, setState] = useState(0);
  console.log(state);

  const handleClick = () => {
    setState((prev) => prev + 1);
  };

  const handleClick2 = () => {
    console.log("Clicked Button2");
  };

  return (
    <>
      <Button1 onClick={handleClick} />
      <Button2 onClick={handleClick2} />
    </>
  );
};

export default Example1;
