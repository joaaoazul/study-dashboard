import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  if (darkMode === undefined || toggleDarkMode === undefined) {
    console.log("Dark mode ou toggle estão undefined!");
  }
  return (
    <button onClick={toggleDarkMode} className="toggle-mode">
      {darkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};

export default DarkModeToggle;
