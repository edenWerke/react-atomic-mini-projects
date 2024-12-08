// src/organisms/ColorChanger.js
import { useState } from "react";
import Box from "../atoms/Box";
import ColorControls from "../molecules/ColorControls";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <Box color={color} />
      <ColorControls onChangeColor={setColor} />
    </div>
  );
}

export default ColorChanger;
