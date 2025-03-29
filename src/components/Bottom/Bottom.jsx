import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaCopyright,
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';

const Bottom = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Mumbai, Maharashtra, India" },
    { icon: <FaEnvelope />, text: "info@cogniedge.in" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-950 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                COGNIQEDGE PLATFORMS AND DIGITAL 
                SOLUTIONS INDIA PRIVATE LIMITED
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mt-4">
                Powering the Future at the CogniqEdge. CogniqEdge is creating cutting-edge 
                digital infrastructure enabling innovative solutions for both consumer and 
                enterprise segments nationwide.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-purple-400 text-xl">{info.icon}</span>
                  <span className="text-sm sm:text-base">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 w-full mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CogniqEdge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
