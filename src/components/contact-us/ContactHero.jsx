import React from "react";
import "./contact.css";
import Form from "../form/Form";

const ContactHero = () => {
  return (
    <div className="contact">
      <div className="contactWrapper">
      
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="formWrapper">
        <h3 className="contactUsTitle">Contact Us</h3>
        <h1 className="formTitle">Send Us a Message</h1>
        <Form/>
      </div>
    </div>
  );
};

export default ContactHero;
