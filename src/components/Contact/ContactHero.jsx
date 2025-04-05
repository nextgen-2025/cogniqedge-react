import React from "react";
import Form from "../ContactForm/Form";

const ContactHero = () => {
  return (
    <div className="relative z-0"> {/* Add z-0 to ensure it stays below navbar */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24">
        {/* Background overlay with purple accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-4 md:px-16">
            Contact Us for further engagement and collaboration
          </h1>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default ContactHero;
