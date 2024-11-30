import React from "react";
import t1 from '../assest/Traditional/t1.jpg'; // Replace with your actual image paths
import t2 from '../assest/Traditional/t2.jpg';
import t3 from '../assest/Traditional/t3.jpg';
import t4 from '../assest/Traditional/t4.jpg';
import t5 from '../assest/Traditional/t5.jpg';

// Illustration data
const illustrations = [
  {
    image: t1,
  },
  {
    image: t2,
  },
  {
    image: t3,
  },
  {
    image: t4,
  },
  {
    image: t5,
  },
];

const Traditional = () => {
  return (
    <div
    className="container mx-auto py-10 px-4 sm:px-6 lg:px-12"
    style={{ backgroundColor: '#EAE0D1' }}
  >
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-6">
      {illustrations.map((item, index) => (
        <div
          key={index}
          className="relative group text-center transition-transform duration-300"
        >
          <div className="w-fit sm:w-36 h-32 sm:h-36 md:h-36 lg:h-48 overflow-hidden border-4 border-transparent transform transition-all duration-300">
            <img
              src={item.image}
              alt={`Traditional-${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 hover:duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Traditional;