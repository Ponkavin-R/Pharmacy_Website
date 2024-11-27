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
    className="container mx-auto px-8 py-12"
    style={{ backgroundColor: '#F6F6F6' }} // Muted gray background color
  >
    <div className="flex justify-center space-x-6 overflow-x-auto">
      {illustrations.map((item, index) => (
        <div
          key={index}
          className="relative group text-center transition-transform duration-300"
        >
          <div
            className="w-32 h-32 bg-white rounded-[20px] overflow-hidden mx-10 transform group-hover:rounded-full transition-all duration-300 justify-between"
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} // Light shadow for card effect
          >
            <img
              src={item.image}
              alt={`Illustration ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Traditional;
