// /organisms/TemperatureConverter.js
import { useState } from "react";
import TemperatureInput from "../molecules/TemperatureInput";
import ConversionResult from "../molecules/ConversionResult";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState(null);

  const handleTemperatureChange = (e) => setTemperature(e.target.value);
  const handleUnitChange = (newUnit) => setUnit(newUnit);

  const convertTemperature = () => {
    let convertedResult;
    if (unit === "C") {
      convertedResult = (parseFloat(temperature) * 9) / 5 + 32;
    } else {
      convertedResult = ((parseFloat(temperature) - 32) * 5) / 9;
    }
    setResult(convertedResult.toFixed(2));
  };

  return (
    <div className="space-y-4">
      <TemperatureInput
        temperature={temperature}
        unit={unit}
        onTemperatureChange={handleTemperatureChange}
        onUnitChange={handleUnitChange}
      />
      <button
        onClick={convertTemperature}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Convert
      </button>
      <ConversionResult result={result} />
    </div>
  );
};

export default TemperatureConverter;
