// /molecules/TemperatureInput.js
// import React from 'react';
import InputField from "../atoms/InputField";
import UnitButton from "../atoms/UnitButton";

const TemperatureInput = (
  temperature,
  unit,
  onTemperatureChange,
  onUnitChange
) => (
  <div className="space-y-4">
    <InputField
      value={temperature}
      onChange={onTemperatureChange}
      placeholder="Enter temperature"
    />
    <div className="flex space-x-4">
      <UnitButton unit="C" onClick={onUnitChange} isSelected={unit === "C"} />
      <UnitButton unit="F" onClick={onUnitChange} isSelected={unit === "F"} />
    </div>
  </div>
);

export default TemperatureInput;
