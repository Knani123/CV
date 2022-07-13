import React, { useRef } from "react";
import "./Resume.css";
const Resume = () => {
  const resume = useRef(null);

  return (
    <div className="Resume-container" ref={resume}>
      Resume
    </div>
  );
};

export default Resume;
