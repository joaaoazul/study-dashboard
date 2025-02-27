import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button onClick={toggleDarkMode} className={`toggle-mode ${darkMode ? "dark" : "light"}`}>
      {darkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
};

export default DarkModeToggle;