import React from "react";


const HeroSection = () => {
  const buttonsContent = [
    "Modualr Data Centers",
    "Private 5G Network solutions",
    "Smart Surveillance and Digital Solutions",
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-34 bg-[#0F1625]">
      <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent max-w-6xl mx-auto leading-tight">
        Powering the Future at the Edge
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed">
        CogniqEdge is powering national digital infrastructure providing
        innovative digital solutions in consumer and enterprise segments.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap w-full max-w-4xl mx-auto">
        {buttonsContent.map((text, index) => (
          <button 
            key={index}
            className="px-6 sm:px-8 py-3 text-sm sm:text-base text-white 
                     cursor-pointer border-none rounded-full
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 ease-in-out
                     hover:from-blue-600 hover:to-purple-600
                     hover:shadow-lg hover:scale-105
                     whitespace-normal sm:whitespace-nowrap"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
