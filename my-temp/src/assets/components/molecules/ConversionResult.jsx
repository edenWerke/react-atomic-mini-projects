// /molecules/ConversionResult.js
// import React from 'react';

const ConversionResult = (result) => (
  <div className="mt-4 text-xl font-semibold">
    {result !== null
      ? `Converted Temperature: ${result}°`
      : "Enter a value to convert"}
  </div>
);

export default ConversionResult;
