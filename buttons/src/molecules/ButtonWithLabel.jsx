// src/components/molecules/ButtonWithLabel.js

import React, { useState } from "react";
import Button from "../atoms/Button";

const ButtonWithLabel = () => {
  const [label, setLabel] = useState("Click Me");

  const handleClick = () => {
    setLabel("You Clicked!");
  };

  return (
    <div>
      <Button label={label} color="blue" onClick={handleClick} />
    </div>
  );
};

export default ButtonWithLabel;
