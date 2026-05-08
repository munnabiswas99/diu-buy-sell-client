import React, { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600";

  const links = (
    <>
      <li><NavLink to="/" className={navStyle}>Home</NavLink></li>
      <li><NavLink to="/products" className={navStyle}>Products</NavLink></li>
      <li><NavLink to="/sell-post" className={navStyle}>Sell Post</NavLink></li>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
        <Logo></Logo>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">{links}</ul>

            <div className="flex space-x-3">
              <NavLink to='/login' className="px-4 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
                Sign In
              </NavLink>
              <NavLink to="/register" className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                Register
              </NavLink>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3">
          {links}

          <div className="flex flex-col space-y-2 pt-2">
            <button className="w-full border border-green-600 text-green-600 py-2 rounded-md">
              Sign In
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded-md">
              Register
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;