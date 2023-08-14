import React from 'react';
import { shiba1, shiba2, shiba3, logo, shiba3_1 } from '../assets';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      <div className="bg-image-container z-0" style={{ zIndex: -1 }}>
        <img src={shiba3} alt="logo" className="w-full h-full object-cover" />
      </div>

      {/* Transparent black box */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-10">
        <div className="blurbox bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className=" text-4xl font-bold text-shadow-black text-center">
            Welcome to our Shiba Inu Kennel Website
          </h1>
          <p className="text-lg  text-center">
            Discover the world of Shiba Inus and our adorable puppies.
          </p>
          {/* Add more text divs as needed */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
