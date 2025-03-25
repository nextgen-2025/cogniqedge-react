import React from "react";

import KeyFeatures from "./KeyFeatures";

function Service() {
  return (
    <div className="w-full min-h-screen bg-[#1F2937] text-white flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Key Features</h2>
      </div>
      <KeyFeatures />
    </div>
  );
}

export default Service;
