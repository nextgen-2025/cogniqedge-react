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
    { icon: <FaMapMarkerAlt />, text: "Navi Mumbai" },
    { icon: <FaEnvelope />, text: "info@cogniedge.in" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Company Info */}
          <div className="space-y-6 max-w-2xl mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              COGNIQEDGE PLATFORMS AND DIGITAL 
              SOLUTIONS INDIA PRIVATE LIMITED
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Powering the Future at the CogniqEdge. CogniqEdge is creating cutting-edge 
              digital infrastructure enabling innovative solutions for both consumer and 
              enterprise segments nationwide.
            </p>
          </div>

          {/* Quick Links - Keeping for future */}
          {/*<div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              {shortLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:text-purple-400 transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Contact Info */}
          <div className="space-y-4 mb-12">
            <h4 className="text-lg font-semibold text-purple-400">Contact Us</h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <span className="text-purple-400 text-xl">{info.icon}</span>
                  <span className="text-sm sm:text-base">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 w-full pt-8">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} CogniqEdge. All rights reserved.
              </p>
              
              {/* Social Links - Keeping for future */}
              {/*<div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
