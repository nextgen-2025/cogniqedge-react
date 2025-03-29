import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaLightbulb, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions and forward-thinking approaches."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering superior quality and exceptional results in everything we do."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together to create meaningful solutions and lasting partnerships."
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Making a difference through technology and innovation worldwide."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Us
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-400">About</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            At CogniqEdge, we're dedicated to revolutionizing digital infrastructure 
            through innovative solutions. Our mission is to empower businesses with 
            cutting-edge technology that drives growth and success in the digital age.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50
                         transform transition-all duration-300 hover:scale-105
                         hover:bg-gray-700/70 hover:border-purple-500/50
                         text-center"
            >
              <div className="text-purple-400 mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-gray-800/30 rounded-xl p-8 lg:p-12 backdrop-blur-sm border border-gray-700/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-400 text-lg mb-8">
              We envision a future where businesses harness the full potential of 
              digital technology to create exceptional value for their customers. 
              Through continuous innovation and excellence, we aim to be at the 
              forefront of this digital transformation.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r 
                       from-blue-500 to-purple-500 text-white font-semibold
                       hover:from-blue-600 hover:to-purple-600 
                       transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;