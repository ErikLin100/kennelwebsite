import React, { useState, useEffect } from 'react';
import { shiba3_1 } from '../assets';
import Navbar from './Navbar';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <Navbar isVisible={showNavbar} />

      <div className="bg-image-container-hero z-0" style={{ zIndex: -1 }}>
        <img src={shiba3_1} alt="logo" className="w-full h-full object-cover" />
      </div>

      {/* Transparent black box */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-10">
        <div className="blurbox bg-gray-100 bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-shadow-black text-center">
            Welcome to our Shiba Inu Kennel Website
          </h1>
          <p className="text-lg text-center">
            Discover the world of Shiba Inus and our adorable puppies.
          </p>
          {/* Add more text divs as needed */}
         
        </div>
        <Link
            to="about" // Replace with the ID of the next section
            spy={true}
            smooth={true}
            offset={0} // Adjust the offset as needed
            duration={500}
          >
            <FaArrowDown className="text-white mt-4 text-2xl cursor-pointer justify-center" />
          </Link>
      </div>
    </div>
  );
};

export default Hero;
