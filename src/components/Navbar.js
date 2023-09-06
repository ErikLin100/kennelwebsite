import React from 'react';
import { logo } from '../assets';

const Navbar = ({ isVisible }) => {
  const navbarStyle = {
    width: '100%',
    overflowX: 'hidden', // Prevent horizontal scrolling
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
      style={navbarStyle} // Apply the inline styles
    >
      <nav className="bg-black bg-opacity-60 py-3 flex justify-center items-center shadow-lg">
        <ul className="flex space-x-6 items-center">
          <li>
            <a href="#about" className="text-white hover:text-accent font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-accent font-bold">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-accent font-bold">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-accent font-bold">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
