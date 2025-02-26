import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNetworkWired, FaShieldAlt, FaTools, FaUserSecret } from "react-icons/fa";
import "./Sidebar.css";
import { FaShieldCat, FaShieldHalved } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2 className="logo">CISO Dashboard</h2>
      <ul>
        <li><Link to="/ccna"><FaNetworkWired /> CCNA</Link></li>
        <li><Link to="/security-plus"><FaShieldAlt /> Security+</Link></li>
        <li><Link to="/devops"><FaTools /> DevOps</Link></li>
        <li><Link to="/pentest-plus"><FaUserSecret /> Pentest+</Link></li>
        <li><Link to="/cc"><FaShieldAlt /> CC</Link></li>
        <li><Link to="/"><FaHome /> Home</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
