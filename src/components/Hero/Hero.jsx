import React from "react";

const HeroSection = () => {
  const buttonsContent = [
    "Modualr Data Centers",
    "Private 5G Network solutions",
    "Smart Surveillance and Digital Solutions",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-12 sm:p-6 md:p-34 bg-[#0F1625]">
      <div className="space-y-8 sm:space-y-12 w-full">
        <h1 className="font-[Tektur] text-4xl sm:text-5xl md:text-5xl lg:text-6xl 
                     font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                     bg-clip-text text-transparent max-w-6xl mx-auto 
                     leading-tight px-2">
          Powering the Future at the Edge
        </h1>

        <p className="font-[Jost] text-lg sm:text-xl text-white/90 
                    max-w-2xl mx-auto leading-relaxed px-4">
          CogniqEdge is powering national digital infrastructure providing
          innovative digital solutions in consumer and enterprise segments.
        </p>

        {/* Updated button container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-sm md:max-w-6xl mx-auto px-4">
          {buttonsContent.map((text, index) => (
            <button 
              key={index}
              className="w-full px-6 py-4 
                       text-sm sm:text-base text-white font-medium
                       cursor-pointer border-none rounded-full
                       bg-gradient-to-r from-blue-500 to-purple-500 
                       transition-all duration-300 ease-in-out
                       hover:from-blue-600 hover:to-purple-600
                       hover:shadow-lg hover:scale-[1.02]
                       active:scale-[0.98]
                       break-words min-h-[60px] flex items-center justify-center"
            >
              <span className="inline-block px-2">{text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;