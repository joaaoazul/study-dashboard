import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        background: darkMode ? "#444" : "#ddd",
        color: darkMode ? "#fff" : "#000",
        cursor: "pointer",
        marginBottom: "30px", // Aumentado para 30px
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
