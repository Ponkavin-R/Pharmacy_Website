import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPills, faUserMd, faLeaf, faShippingFast } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const features = [
    {
      icon: faPills,
      title: "Quality Product's",
      description: "We provide high-quality Product's directly from trusted manufacturers.",
    },
    {
      icon: faUserMd,
      title: "Expert Guidance",
      description: "Our dedicated support team is here to guide you in selecting the right products. Get advice tailored to your preferences and needs.",
    },
    {
      icon: faLeaf,
      title: "Diverse Product Range",
      description: "From everyday essentials to exclusive collections, explore a wide range of categories that cater to every lifestyle and requirement.",
    },
    {
      icon: faShippingFast,
      title: "Free Shipping",
      description: "Enjoy hassle-free shopping with fast shipping and no extra charges. We make sure your products reach you quickly and safely.",
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
