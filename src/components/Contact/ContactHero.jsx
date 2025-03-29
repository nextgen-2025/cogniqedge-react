import React from "react";
import { Link } from "react-router-dom";
import Form from "../ContactForm/Form";

const ContactHero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        {/* Background overlay with purple accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-purple-400">Contact</span>
          </div>
        </div>
      </div>
      <Form />
    </>
  );
};

export default ContactHero;
