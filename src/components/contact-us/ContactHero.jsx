import React from "react";
import "./contact.css";
import Form from "../form/Form";

const ContactHero = () => {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Contact Us</h1>
      
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="formWrapper">
        <Form/>
      </div>
    </div>
  );
};

export default ContactHero;
