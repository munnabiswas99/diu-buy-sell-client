import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-green-700">
            Daffodil Hub
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Center Nav Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-green-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Post Ad
              </a>
            </div>

            {/* Right Buttons */}
            <div className="flex space-x-3 ml-6">
              <button className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                Sign In
              </button>
              <button className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-indigo-700">
                Register
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700">
            Home
          </a>
          <a href="#" className="block text-gray-700">
            Products
          </a>
          <a href="#" className="block text-gray-700">
            Post Ad
          </a>

          <div className="flex flex-col space-y-2 pt-2">
            <button className="w-full px-4 py-2 border border-indigo-600 text-green-600 rounded-md">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;