import React from "react";
import { Link } from "react-router-dom";
import CAE_LOGO from "../images/CAE_logo.png";
const Header = () => {
  return (
    <div style={{ justifyItems: "center" }}>
      <header
        style={{ width: "80%" }}
        className="bg-white py-10 relative w-[80%] mx-auto"
      >
        <img
          src={CAE_LOGO}
          alt="CAE Logo"
          className="absolute  top-1/2 transform -translate-y-1/2 w-24"
        />

        <nav>
          <ul className="flex justify-center space-x-6 md:space-x-10">
            <li>
              <Link
                to="#home"
                className="text-blue-600 text-lg font-medium hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#services"
                className="text-black text-lg font-medium hover:text-orange-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="text-black text-lg font-medium hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="#about"
                className="text-black text-lg font-medium hover:text-orange-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#support"
                className="text-black text-lg font-medium hover:text-orange-400"
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
