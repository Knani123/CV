import React from "react";
import { useRef } from "react";
import "./Header.css";
import LeftHead from "./LeftHead/LeftHead";
const Header = () => {
  return (
    <div className="Header-container">
      <div className="Titre">
        <LeftHead />
        <h1>KNANI Yosri</h1>
      </div>
      <ul className="Header-List">
        <li className="list">Home</li>
        <li className="list">About ME</li>
        <li className="list">Resume</li>
        <li className="list">Contact ME</li>
      </ul>
    </div>
  );
};

export default Header;
