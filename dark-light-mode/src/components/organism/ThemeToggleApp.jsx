import { useState } from "react";
import ToggleSwitch from "../molecules/ToggleSwitch";

const ThemeToggleApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <ToggleSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />{" "}
    </div>
  );
};

export default ThemeToggleApp;
