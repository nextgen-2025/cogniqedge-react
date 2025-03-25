import React from "react";
import {
  MdSpeed,
  MdDataUsage,
  MdSecurity,
  MdVerified,
  MdCloud,
  MdDeviceHub,
} from "react-icons/md";

const KeyFeatures = () => {
  const services = [
    {
      icon: <MdSpeed className="w-12 h-12" />,
      title: "Lower Latency",
      description:
        "Reduce latency and improve application performance with our strategically located edge data centers.",
    },
    {
      icon: <MdDataUsage className="w-12 h-12" />,
      title: "Energy Efficiency",
      description:
        "Reduce operational costs and environmental impact with our energy-efficient data center designs.",
    },
    {
      icon: <MdVerified className="w-12 h-12" />,
      title: "Enhanced Security",
      description:
        "Protect your critical data with private data storage and robust security measures.",
    },
    {
      icon: <MdSecurity className="w-12 h-12" />,
      title: "Scalability",
      description:
        "Easily scale your infrastructure to meet growing demands with our flexible and scalable solutions.",
    },
    {
      icon: <MdCloud className="w-12 h-12" />,
      title: "Sustainable Digital Transformation",
      description:
        "Enabling sustainable practices and innovations with a responsibility to the environment.",
    },
    {
      icon: <MdDeviceHub className="w-12 h-12" />,
      title: "Time-to-Market Advantage",
      description: "Launch services in chosen markets within months.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1F2937] text-white flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Key Features</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#121A28] text-white rounded-lg shadow-lg p-6 
                       overflow-hidden cursor-pointer group
                       hover:-translate-y-2 hover:shadow-2xl
                       transition-all duration-500 ease-in-out"
          >
            <div
              className="absolute inset-0 bg-purple-600 
                          transform -translate-y-full group-hover:translate-y-0
                          transition-transform duration-500 ease-in-out"
            ></div>
            <div className="relative z-10">
              <div
                className="flex justify-center mb-4 text-purple-500 
                            group-hover:text-white transition-colors duration-500"
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-bold text-center mb-3 
                           group-hover:text-white transition-colors duration-500"
              >
                {service.title}
              </h3>
              <p
                className="text-center group-hover:text-white 
                          transition-colors duration-500 mb-2"
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
