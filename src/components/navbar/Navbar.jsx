import React, { useState } from "react";
import "./navbar.css";
// import ceLogo from "../../assets/ce-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array of navbar items
  const navbarItems = ["Home", "Contact"];

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          {/* <img src={ceLogo} alt="Company Logo" className="navbarLogo" /> */}
          <div className="titleWrapper">
            <div className="navbarTitle C">
              Cogn<span className="navbarTitle I">iq</span>
              <span className="navbarTitle E">Edge</span>
            </div>
            <div className="subTitle">REDEFINING DIGITAL EXPERIENCES</div>
          </div>
        </div>
        <div className={`navbarRight ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbarList">
            {navbarItems.map((item, index) => (
              <li key={index} className="navbarListItem">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
