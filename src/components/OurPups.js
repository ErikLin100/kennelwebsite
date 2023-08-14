import React from 'react';

import coco from '../assets';

const puppiesData = [
  {
    id: 1,
    name: 'Coco',
    age: '8 weeks',
    description: 'Coco is a playful and curious Shiba Inu puppy, looking for a loving home.',
    image: require('../assets/coco.jpg'), // Replace with actual image path
  },
  {
    id: 1,
    name: 'tuju',
    age: 'äläjaks 8v ',
    description: 'Coco is a playful and curious Shiba Inu puppy, looking for a loving home.',
    image: require('../assets/coco.jpg'), // Replace with actual image path
  },
  {
    id: 1,
    name: 'Popo',
    age: '8 weeks',
    description: 'Coco is a playful and curious Shiba Inu puppy, looking for a loving home.',
    image: require('../assets/coco.jpg'), // Replace with actual image path
  },
  // Add more puppy data entries here
];

const OurPups = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Shiba Inus</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {puppiesData.map((puppy) => (
            <div key={puppy.id} className="blurbox bg-black bg-opacity-50 rounded-lg p-4 shadow-md relative">
              <h3 className="text-xl font-bold mb-2">{puppy.name}</h3>
              {/* Uncomment the next line and use the imported image */}
              <img src={puppy.image} alt={puppy.name} className="w-full h-32 object-cover mb-4 rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
              <p className="text-gray-600">{puppy.description}</p>
              <button className="bg-white bg-opacity-50 text-black hover:bg-opacity-75 rounded-lg px-4 py-2 mt-4 transition duration-300">Adopt Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPups;
