import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext"; 
import DarkModeToggle from "./components/DarkModeToggle";
import Sidebar from "./components/Sidebar";
import CCNA from "./pages/CCNA";
import SecurityPlus from "./pages/SecurityPlus";
import CC from "./pages/CC";
import Home from "./pages/Home";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`} onMouseMove={() => setSidebarVisible(true)}>
      {sidebarVisible && <Sidebar />}
      <div className="main-content">
        <DarkModeToggle />
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

