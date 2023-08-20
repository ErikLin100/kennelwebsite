import React from 'react';
import { shiba1 } from '../assets'; // Import your about image

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <img src={shiba1} alt="About Shiba Inus" className="w-auto h-30 rounded-lg shadow-md mb-0 block" />
        </div>

          <div className="md:w-1/2">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">About Shiba Inu Kennel</h2>
              <p className="text-gray-600">
                Welcome to our world of Shiba Inus! Our kennel is dedicated to raising healthy and happy Shiba Inu puppies with love and care.
              </p>
              <ul className="list-disc text-left pl-6 mb-6">
                <li className="mb-2">Passionate about Shiba Inus and their unique personalities.</li>
                <li className="mb-2">Committed to responsible breeding practices and the well-being of our dogs.</li>
                <li className="mb-2">Years of expertise in dog care, training, and breeding.</li>
                <li className="mb-2">Our Shiba Inus are raised in a loving and nurturing environment.</li>
                <li className="mb-2">Dedicated to matching our puppies with loving forever homes.</li>
              </ul>
              <button className="bg-accent text-white hover:bg-opacity-75 rounded-lg px-4 py-2 mt-6 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
