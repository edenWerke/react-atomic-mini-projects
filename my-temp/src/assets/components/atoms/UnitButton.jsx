// /atoms/UnitButton.js
// import React from 'react';

const UnitButton = (unit, onClick, isSelected) => (
  <button
    onClick={() => onClick(unit)}
    className={`px-4 py-2 rounded-md ${
      isSelected ? "bg-blue-500 text-white" : "bg-gray-200"
    }`}
  >
    {unit}
  </button>
);

export default UnitButton;
