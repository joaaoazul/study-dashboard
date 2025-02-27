import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CCNA from "./pages/CCNA";
import SecurityPlus from "./pages/SecurityPlus";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";
import CC from "./pages/CC";
import "./App.css";
import { DarkModeProvider } from "./DarkModeContext";

const App = () => {
  // Estado para controlar a visibilidade da sidebar
  const [sidebarVisible, setSidebarVisible] = useState(true);
  // Estado para dark mode, persistido no localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Atualiza o localStorage e alterna a classe no body conforme darkMode
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeProvider>
      <div
        className={`app-container ${darkMode ? "dark" : "light"}`}
        onMouseMove={() => setSidebarVisible(true)}
      >
        {sidebarVisible && <Sidebar />}
        <div className="main-content">
          {/* Botão de dark mode que já funciona – centralizado no header da página CC */}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/ccna" element={<CCNA />} />
            <Route path="/security-plus" element={<SecurityPlus />} />
            <Route path="/cc" element={<CC />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default App;
