// /templates/MainTemplate.js
// import React from 'react';
import TemperatureConverter from "../organisms/TemperatureConverter";

const MainTemplate = () => (
  <div className="flex flex-col items-center p-8">
    <h1 className="text-2xl font-bold mb-4">Temperature Converter</h1>
    <TemperatureConverter />
  </div>
);

export default MainTemplate;
