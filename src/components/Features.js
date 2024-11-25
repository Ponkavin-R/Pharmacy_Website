import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills, faUserMd, faLeaf, faShippingFast } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const features = [
    {
      icon: faPills,
      title: "Quality Medicines",
      description: "We provide high-quality medicines directly from trusted manufacturers.",
    },
    {
      icon: faUserMd,
      title: "Expert Advice",
      description: "Consult with certified pharmacists for the right advice on your medications.",
    },
    {
      icon: faLeaf,
      title: "Natural Options",
      description: "Explore our range of natural and organic health supplements.",
    },
    {
      icon: faShippingFast,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders above ₹ 499.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4"
          >
            <div className="text-green-700 text-4xl">
                <b>
              <FontAwesomeIcon icon={feature.icon} />
              </b>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 justify-items-start">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
