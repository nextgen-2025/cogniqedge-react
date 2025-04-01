import React from "react";

const Bottom = () => {
  

  return (
    <footer className="bg-gradient-to-r from-gray-950 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="space-y-6 w-full">
            <div>
              <h2 className="text-xl font-[Tektur] sm:text-2xl font-bold text-white">
                COGNIQEDGE PLATFORMS AND DIGITAL SOLUTIONS INDIA PRIVATE LIMITED
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mt-4">
                Powering the Future at the CogniqEdge. CogniqEdge is creating
                cutting-edge digital infrastructure enabling innovative
                solutions for both consumer and enterprise segments nationwide.
              </p>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-gray-800 w-full mt-12 pt-8">
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
