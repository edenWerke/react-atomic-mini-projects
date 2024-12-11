/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

const ToggleSwitch = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="flex items-center space-x-4">
      <Label text={`Mode:${isDarkMode ? "Dark" : "light"}`} />
      <Button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light" : "Switch to Dark"}
      </Button>
    </div>
  );
};

export default ToggleSwitch;
