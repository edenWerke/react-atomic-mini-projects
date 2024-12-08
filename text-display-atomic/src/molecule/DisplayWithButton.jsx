import React, { useState } from "react";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

function DisplayWithButton() {
  const [text, setText] = useState("Hello, World!");

  const changeText = () => {
    setText("You clicked the button!");
  };

  return (
    <div>
      <Text content={text} />
      <Button onClick={changeText} label="Change Text" />
    </div>
  );
}

export default DisplayWithButton;
