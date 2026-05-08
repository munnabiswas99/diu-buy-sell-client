import React from "react";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Logo></Logo>
            <p className="text-sm my-4">
              Buy and sell used products easily within Daffodil International
              University. Safe, simple, and student-friendly marketplace.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Post Ad
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm">Daffodil International University</p>
            <p className="text-sm">Email: support@daffodilhub.com</p>
            <p className="text-sm">Phone: +880 1234-567890</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Daffodil Buy Sell Hub. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
