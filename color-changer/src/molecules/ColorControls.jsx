// src/molecules/ColorControls.js
import Button from "../atoms/Button";

function ColorControls({ onChangeColor }) {
  const colors = ["red", "green", "blue", "yellow"];

  return (
    <div>
      {colors.map((color) => (
        <Button
          key={color}
          label={color.charAt(0).toUpperCase() + color.slice(1)}
          onClick={() => onChangeColor(color)}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: color,
            color: "white",
            border: "none",
          }}
        />
      ))}
    </div>
  );
}

export default ColorControls;
