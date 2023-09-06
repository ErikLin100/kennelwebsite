import React from 'react';
import { shiba1 } from '../assets';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const variantsText = {
    hidden: { x: '100%' }, // Slide in from the right
    visible: { x: 0 },
  };

  const variantsImage = {
    hidden: { x: '-100%' }, // Slide in from the left
    visible: { x: 0 },
  };

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <motion.div
              ref={refImage}
              initial="hidden"
              animate={inViewImage ? 'visible' : 'hidden'}
              variants={variantsImage}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-image-container-about"
            >
              <img src={shiba1} alt="About Shiba Inus" className="bg-image" />
            </motion.div>
          </div>

          <div className="md:w-1/2 div-about-slide-in">
            <motion.div
              ref={refText}
              initial="hidden"
              animate={inViewText ? 'visible' : 'hidden'}
              variants={variantsText}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
