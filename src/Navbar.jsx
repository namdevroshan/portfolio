import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white flex items-center justify-between px-6 py-3 rounded-full w-[90%] max-w-[1100px] shadow-lg z-50">
      {/* Desktop Menu Left */}
      <ul className="hidden lg:flex items-center gap-10">
        {["Home", "About", "Services"].map((item, index) => {
          const path = item.toLowerCase();
          return (
            <li key={index}>
              <Link
                to={`/${path === "home" ? "" : path}`}
                className={`px-6 py-2 rounded-full font-semibold no-underline transition-all duration-300 ease-in-out ${
                  location.pathname === `/${path === "home" ? "" : path}`
                    ? "bg-orange-500 text-white"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="bg-orange-500 text-black font-bold text-lg px-4 py-2 rounded-full">
          JC
        </span>
        <span className="font-bold text-lg">JCREA</span>
      </div>

      {/* Desktop Menu Right */}
      <ul className="hidden lg:flex items-center gap-10">
        {["Resume", "Project", "Contact"].map((item, index) => {
          const path = item.toLowerCase();
          return (
            <li key={index}>
              <Link
                to={`/${path}`}
                className={`px-6 py-2 rounded-full font-semibold no-underline transition-all duration-300 ease-in-out ${
                  location.pathname === `/${path}`
                    ? "bg-orange-500 text-white"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-18 left-1/2 transform -translate-x-1/2 bg-black text-white w-[90%] rounded-lg shadow-lg p-5 flex flex-col items-center gap-4 lg:hidden">
          {["Home", "About", "Services", "Resume", "Project", "Contact"].map((item, index) => {
            const path = item.toLowerCase();
            return (
              <Link
                key={index}
                to={`/${path === "home" ? "" : path}`}
                className={`no-underline transition-all duration-300 ease-in-out ${
                  location.pathname === `/${path === "home" ? "" : path}`
                    ? "bg-orange-500 text-white px-6 py-2 rounded-full"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;