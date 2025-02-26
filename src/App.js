import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CCNA from "./pages/CCNA";
import SecurityPlus from "./pages/SecurityPlus";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";
import CC from "./pages/CC"; 
import "./App.css";

const App = () => {
  // Estado para controlar se a sidebar está visível ou não
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Atualiza o dark mode no body e no localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    // Ao mover o mouse, reativa a sidebar
    <div
      className={`app-container ${darkMode ? "dark" : "light"}`}
      onMouseMove={() => setSidebarVisible(true)}
    >
      {sidebarVisible && <Sidebar />}
      <div className="main-content">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/ccna" element={<CCNA />} />
          <Route path="/security-plus" element={<SecurityPlus />} />
          <Route path="/cc" element={<CC />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;




