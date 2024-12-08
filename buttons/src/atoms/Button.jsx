// src/components/atoms/Button.js

import React from "react";

const Button = ({ label, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="btn"
    >
      {label}
    </button>
  );
};

export default Button;
