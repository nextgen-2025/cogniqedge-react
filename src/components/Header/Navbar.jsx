import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarItems = ["Home", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-gray-300 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title with Link */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col hover:opacity-90 transition-opacity">
              <h1 className="text-xl font-bold font-[Tektur]">
                <span className="text-white font-bold text-3xl">
                  Cogn<span className="underline">iq</span>Edge
                </span>
              </h1>
              <span className="text-[10px] tracking-wider text-white">
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
                className="text-[1.1rem] font-semibold text-white hover:text-purple-900 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with SVG */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-100 
                         hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
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

        {/* Mobile Navigation Menu - Updated positioning */}
        <div 
          className={`${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          } md:hidden transition-all duration-200 ease-in-out absolute left-0 right-0 top-full 
        bg-gradient-to-r from-blue-500 to-purple-500 border-t border-white/10`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navbarItems.map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-white
                       hover:bg-white/10 rounded-lg transition-colors duration-200"
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
