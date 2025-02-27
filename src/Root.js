import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeProvider } from "./DarkModeContext";
import App from "./App";

const Root = () => (
  <DarkModeProvider>
    <Router>
      <App />
    </Router>
  </DarkModeProvider>
);

export default Root;
