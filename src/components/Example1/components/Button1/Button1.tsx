import React from "react";

interface Button1Props {
  onClick: () => void;
}

const Button1: React.FC<Button1Props> = ({ onClick }) => {
  return <button onClick={onClick}>Button1</button>;
};

export default Button1;
