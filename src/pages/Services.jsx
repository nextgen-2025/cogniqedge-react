import React from 'react';
import { Link } from 'react-router-dom';
import { FaServer, FaCloud, FaShieldAlt, FaCogs, FaChartLine, FaNetworkWired } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Edge Computing Solutions",
      description: "Leverage edge computing to process data closer to the source, reducing latency and improving performance.",
      features: ["Low Latency", "Real-time Processing", "Distributed Computing"]
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate cloud services to scale your infrastructure and optimize resource utilization.",
      features: ["Hybrid Cloud", "Multi-cloud Strategy", "Cloud Migration"]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security Solutions",
      description: "Protect your digital assets with comprehensive security solutions and compliance management.",
      features: ["Threat Detection", "Data Protection", "Compliance Management"]
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Infrastructure Management",
      description: "End-to-end infrastructure management services to maintain peak performance and reliability.",
      features: ["24/7 Monitoring", "Predictive Maintenance", "Resource Optimization"]
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize your systems for maximum performance and efficiency across all platforms.",
      features: ["Load Balancing", "Performance Monitoring", "Capacity Planning"]
    },
    {
      icon: <FaNetworkWired className="w-8 h-8" />,
      title: "Network Solutions",
      description: "Design and implement robust network solutions for seamless connectivity.",
      features: ["Network Design", "Implementation", "Maintenance"]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-400">Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50
                         transform transition-all duration-300 hover:scale-105
                         hover:bg-gray-700/70 hover:border-purple-500/50
                         hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="text-purple-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 bg-gray-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today to discuss how our services can help you achieve your goals.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r 
                     from-blue-500 to-purple-500 text-white font-semibold
                     hover:from-blue-600 hover:to-purple-600 
                     transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
