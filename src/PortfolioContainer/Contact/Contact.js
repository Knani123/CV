import React, { useRef } from "react";
import "./Contact.css";
const Contact = () => {
  const contact = useRef(null);
  return (
    <div className="contact-container" ref={contact}>
      Contact
    </div>
  );
};

export default Contact;
