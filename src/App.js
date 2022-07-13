import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import React from "react";
import Contact from "./PortfolioContainer/Contact/Contact";
import About from "./PortfolioContainer/AboutMe/About";
import Resume from "./PortfolioContainer/Resume/Resume";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
