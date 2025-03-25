import React from "react";
import { MdSpeed, MdProductionQuantityLimits, MdPerson, MdAttachMoney, 
         MdDeviceHub, MdSecurity, MdCloudDone, MdSupportAgent } from "react-icons/md";

const KeyBenefits = () => {
  const benefits = [
    {
      icon: <MdSpeed className="w-12 h-12" />,
      title: "Improved application performance",
    },
    {
      icon: <MdProductionQuantityLimits className="w-12 h-12" />,
      title: "Increased productivity",
    },
    {
      icon: <MdPerson className="w-12 h-12" />,
      title: "Enhanced user experience",
    },
    {
      icon: <MdAttachMoney className="w-12 h-12" />,
      title: "Reduced operational costs",
    },
    {
      icon: <MdDeviceHub className="w-12 h-12" />,
      title: "Increased scalability",
    },
    {
      icon: <MdSecurity className="w-12 h-12" />,
      title: "Improved security",
    },
    {
      icon: <MdCloudDone className="w-12 h-12" />,
      title: "Increased reliability",
    },
    {
      icon: <MdSupportAgent className="w-12 h-12" />,
      title: "Improved customer service",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1A2332] text-white flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mt-2">Key Features</h2>
      </div>

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#374151] rounded-lg
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25
                         transition-all duration-300 cursor-pointer group"
            >
              <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-md font-bold text-center group-hover:text-purple-500 
                           transition-colors duration-300">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
