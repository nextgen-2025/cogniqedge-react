import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarItems = ["Home", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-gray-950 to-gray-900 text-gray-300 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title with Link */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col hover:opacity-90 transition-opacity">
              <h1 className="text-xl font-bold">
                <span className="text-white font-bold text-3xl">
                  Cogn<span className="underline">iq</span>Edge
                </span>
              </h1>
              <span className="text-[10px] tracking-wider text-gray-400">
                REDEFINING DIGITAL EXPERIENCES
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navbarItems.map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[1.1rem] text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with SVG */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                         hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              aria-expanded={isMenuOpen}
              aria-label="Main menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          } md:hidden transition-all duration-200 ease-in-out absolute left-0 right-0 bg-gray-950/95 backdrop-blur-sm`}
        >
          <div className="text-right px-4 pt-2 pb-3 space-y-1 border-t border-gray-800">
            {navbarItems.map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-300 
                         hover:text-purple-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
