import React from "react";
import { Link } from "react-router-dom";
import ccImg from "../ccCover.jpg";
import "./Home.css";

console.log("Home rendered");

const certifications = [
  { 
    name: "CCNA", 
    progress: 40, 
    examDate: "2025-06-10", 
    path: "/ccna", 
    currentModule: "Routing Protocols",
    moduleDescription: "Learn the fundamentals of routing protocols including OSPF, EIGRP, and BGP.",
    image: "https://via.placeholder.com/300x150?text=Security+"
  },
  { 
    name: "Security+", 
    progress: 70, 
    examDate: "2025-04-15", 
    path: "/security-plus", 
    currentModule: "Threat Analysis",
    moduleDescription: "Understand the latest in threat analysis and countermeasures.",
    image: "https://via.placeholder.com/300x150?text=Security+"
  },
  { 
    name: "Certified in Cybersecurity", 
    progress: 70, 
    examDate: "2025-04-10", 
    path: "/cc", 
    currentModule: "Access Control",
    moduleDescription: "Learn the fundamentals of access control and identity management.",
    image: ccImg
  }, 
  
]; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Dashboard Overview</h1>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <Link to={cert.path} key={index} className="cert-link">
            <div className="cert-card">
              <h3>{cert.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${cert.progress}%` }}
                ></div>
              </div> 
              <p>Progresso: {cert.progress}%</p>
              <p>Exame: {cert.examDate}</p>
              <div className="hover-content">
                <p className="current-module">Módulo Atual: {cert.currentModule}</p>
                <p className="module-description">{cert.moduleDescription}</p>
              </div>
             
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
