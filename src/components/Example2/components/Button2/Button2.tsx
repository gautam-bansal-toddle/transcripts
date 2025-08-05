import React from "react";

interface Button2Props {
  onClick: () => void;
}

const Button2: React.FC<Button2Props> = ({ onClick }) => {
  console.log("Button2 rendered");
  return <button onClick={onClick}>Button2</button>;
};

export default Button2;
