import React from 'react';
import { Link } from 'react-router-dom';
import { MdError, MdHome } from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1F2937] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Error Icon */}
        <div className="text-purple-500 mb-8">
          <MdError className="w-24 h-24 mx-auto" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Return Home Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     text-white rounded-full font-medium
                     hover:from-blue-600 hover:to-purple-600 
                     transition-all duration-300 hover:scale-105"
        >
          <MdHome className="text-xl" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
