import React from 'react';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black bg-opacity-60 py-3 flex justify-center items-center shadow-lg">
        
        <ul className="flex space-x-10 items-center justify-center pr-5">
          
          <li>
            <a href="#" className="text-white hover:text-accent font-bold">
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
