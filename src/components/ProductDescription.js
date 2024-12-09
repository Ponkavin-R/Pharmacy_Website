import React from 'react';
import { useState } from "react";
// Images (Replace with actual image imports)
import p01 from '../assest/products/01.jpg';
import p02 from '../assest/products/02.jpg';
import p03 from '../assest/products/03.jpg';
import p1 from '../assest/products/p1.jpg';
 import p2 from '../assest/products/p2.jpg';
 import p3 from '../assest/products/p3.jpg';
 import p4 from '../assest/products/p4.jpg';
 import p5 from '../assest/products/p5.jpg';
 import p12 from '../assest/products/p12.jpg';
 import p13 from '../assest/products/p13.jpg';
 import p14 from '../assest/products/p14.jpg';
 const products = [
    {
      id: 1,
      name: "Root Cleaner",
      category: "Pain Relief",
      shortDescription:
        "A powerful herbal drink that dissolves blockages in the blood vessels and protects against heart attacks.",
      fullDescription: `
       A powerful herbal drink that dissolves blockages in the blood vessels and protects against heart attacks.
This drink dissolves blockages in the blood vessels and helps in digestion. It dissolves cholesterol blockages. It dissolves blockages caused by blood clots. It dissolves blood clots caused by varicose veins.

People infected with the corona virus have a blockage in the blood vessels due to blood clots and sudden heart attacks, and it is widely said that people who have been vaccinated against corona have a blood clot and sudden heart attacks.

People who have been vaccinated against corona can have a sudden heart attack if they have difficulty breathing or if they take a breath while walking.

If you drink this herbal drink called Root cleaner, you will avoid heart attacks.

This drink dissolves blockages caused by blood clots and blockages caused by cholesterol. Due to this, it will also reduce high blood pressure.

Ingredients

1) One liter of lemon juice

2) One liter of garlic juice

3) One liter of onion juice

4) One liter of ginger juice

5) One liter of pomegranate juice

6) One liter of mint leaf juice

Recipe

Pour these into a plastic can.

1) Sadakguppai = 250 grams

2) Omam = 250 grams

3) Anise = 250 grams

4) Bark = 250 grams

5) Alerici = 100 grams

6) Cloves = 150 grams

7) Black cumin = 150 grams

8) Marutham bark = 250 grams

9) Karkat flower = 100 grams

10) White lotus flower = 100 grams

11) Rose flower = 100 grams

12) Hibiscus flower = 100 grams

13) Sandalwood = 100 grams

Recipe

Crush these one by one and soak them in 15 liters of water for 24 hours, then turn on the stove and boil them to 10 liters and mix them with the herbal juices that were previously poured into the can without removing the lid. Mix well every day and this mixture will not spoil. After ten days of the spicy smell, filter the pot well.

Strain this mixture through the mouth. You will get oily water, that is, smooth water. Graduate doctors and traditional Siddha doctors buy this Root Cleaner Heart drops from me.

This herbal water that gives amazing results can be prepared by skilled doctors. Since it is water, it does not spoil. It is easy to eat and has a slightly salty and sour taste.

Some people prepare it as a syrup by mixing lemon juice, ginger juice, garlic juice, vinegar and honey. Since it is very irritating, it can cause stomach ulcers in some people.

But since it is water, it is not irritating, so it does not cause stomach ulcers. By straining it through the mouth, only the nutrients of the herbs come out and we get oily water, so it is easy to eat. It is easily digestible. Water has many benefits.

If you add Rasa Veerapadangam, Mupura Padangam etc. to this hot water, it will easily dissolve any blockages in the blood vessels. The pain will stop on the first day of taking the medicine. If you continue to take the medicine, you can avoid a heart attack.

Those who take English medicine for blockages in the blood vessels can also take this as a supplement or food item along with English medicine.

Dosage

Take 7 ml to 10 ml of this hot water and mix it with 200 ml of warm water and consume it one hour before meals in the morning and evening. One mandala is 48 days. Taking 3 mandalas can completely cure diabetes. (Madumeka Soorana)' The soorana that can completely cure diabetes should be consumed three times before meals. Two grams should be consumed. (Raja Kalpam) Raja strengthens the internal organs and keeps them functioning smoothly. It can cure infertility and sterility in men. It can cure nervous breakdown.
      `,
      image: p01,
    },
    {
      id: 2,
      name: "Raja Kalpa Sooranam",
      category: "Cough & Cold",
      shortDescription:
        "A traditional remedy used for generations to strengthen internal organs and improve immunity.",
      fullDescription: `
       *Raja Kalpa Sooranam has been used for three generations without any side effects, traditionally to remove asthma, allergy wheezing, male and female infertility.... Thyroid... Liver, spleen, heart, lungs, kidneys to strengthen the brain nerves.... Stomach ulcers heal the heart and strengthen the brain nerves, deafness. Strengthens the heart, gallstones are cured. Stomach ulcers, mouth ulcers, insects in the stomach are destroyed, pelvic pain is relieved, vomiting blood, many years of stress, impotence, sperm dilution, body fatigue, anxiety, palpitations, night insomnia, digestive problems, infertility for many years, lung breathing problems, shortness of breath, blood flow is smooth, nerve-related problems are cured (divine kalpam) We are strengthening the internal organs of the king and giving them to function smoothly.... Your health using this, through Siddhar Ashir, all your physical problems are auspicious. Benefits of herbal medicine- Restores lost energy,
Strengthens bones and nerves:-
*Drumstick seeds – 20g
*Radish seeds – 50g,
*Pumpkin seeds – 50g
*Black cumin seeds – 50g
*Cloves – 20g
*Cinnamon – 20g
*Agarwood – 20g
*Nutmeg – 20g
*Omam – 10g
*Cinnamon – 10g
*Jade – 10g
*Garlic – 25g
Cardamom – 15g
Pulverize the above ingredients and grind them. Consume 2g of the powder with hot milk after dinner….
Strengthens bones and nervous system. Loss of minerals, energy, internal organs, rapid loss of energy, fat deposits dissolve, minerals appear, women become white, decreased sensation in the vagina and loss of pleasure, then numbness in the hands and feet, pain in the hips,
Lost energy is recovered.


Rajakalpa Sooranam: Taniya 25 grams,
•⁠  ⁠Chatukuppi 25 grams
•⁠  ⁠Neermulli seeds 10 grams20 grams
•⁠  ⁠Jathikai 5 grams
•⁠  ⁠Jathi Patri 10 grams
•⁠  ⁠Cucumber seeds 10 grams


👉 Crushed sukku 35 grams, 👉 Nerunjil seeds 10 grams,
👉 Athipattai 5 grams
👉 Dried gooseberry 25 grams,
👉 Black cumin 15 grams
•⁠  ⁠Alum seeds 25 grams,
👉 Ashwagandha 30 grams,
•⁠  ⁠Black cumin 23 grams,
👉 Korai tuber 20 grams
•⁠  ⁠Banana tuber flour tuber 30 grams, * Adhimaduram 23 grams,
•⁠  ⁠Mango dal 10 grams,
•⁠  ⁠Salamisiri 5 grams
•⁠  ⁠Pomegranate dry seeds 100 grams
•⁠  ⁠Balamuthungan 25 Gram


*Thangapoozhppam 5 grams, *Thippili 30 grams,
Take the above mentioned amount, clean it, dry it in the shade and make it into a surana.
Boil this in hot water and eat 4 grams of teaspoonful every day to strengthen the royal organs. Body health, low immunity of the royal organs is cured 100%...
Greens to increase energy

1.*If you cook and eat Duthuwala spinach, it will strengthen the body and increase energy.
2.*Take 15 grams of Tottar Shrukki leaves and grind them, mix them with milk and eat them after dinner, it will increase energy.
3.⁠ ⁠Soak the thorn in radish spinach juice, dry it and powder it and eat it every morning and night after meals in the amount of 3 grams.
Take this herbal (food) medicine daily

👉🏻It will relieve nervousness, weakness, and physical weakness
It will cure anemia, anemia, and mineral deficiency.
👉🏻It will increase blood and make the body strong.
👉🏻It will increase your body strength and immunity.,Body weight decreases, and heart attacks are increasing in young people. The main reason for that is said to be lack of sleep at night and eating habits. This deficiency is corrected by Rajakalpa Surana.
👉🏻It will increase your brain function and memory power.·
👉🏻You can get the blessing of a child who gives mineral strength.
👉🏻The body will not get tired even after working hard.
👉🏻It will strengthen the royal organs. A rare and wonderful herb made according to Siddha medicine will give good results,
It will correct your weakness no matter what the condition is.
100% guaranty.
      `,
      image: p02,
    },
    {
      id: 3,
      name: "Rabbit Hair Growth Oil",
      category: "Hair Oil",
      shortDescription:
        "Promotes long, thick, and shiny hair. Prevents hair fall, treats dandruff, and strengthens hair roots.",
      fullDescription: `
       🐰🩸🍾Gives a permanent solution to your hair problem👌

🐰🩸🍾Hair stops falling, turns gray, grows thickly👌

🐰🩸🍾Long, thick, black hair👌

🐰🩸🍾Hair dryness changes👌

🐰🩸🍾Dandruff problem completely disappears👌

🐰🩸🍾Prevents hair loss
Promotes hair growth in the place where hair fell👌

🐰🩸🍾Lice dandruff disappears
Red hair changes👌

🐰🩸🍾Eye irritation disappears
Hair becomes thicker👌

🐰🩸🍾Hair roots become stronger👌

🐰🩸🍾Reduces body heat👌

🐰🩸🍾Fixes split ends👌

🐰🩸🍾Hair becomes thicker & darker. Rabbit blood oil can also be a solution to the problem of deworming.... *Use for a maximum of three months to get many benefits for hair related problems.
      `,
      image: p03,
    },{
        id: 4,
        name: "Liya Floor Cleaner",
        category: "Floor Cleaner",
        price: 50,
        unit: "50gms",
        image: p1,
        shortDescription: "A powerful floor cleaner that removes tough stains and leaves a fresh fragrance.",
        fullDescription: `
          Liya Floor Cleaner is a multipurpose cleaning solution that effectively removes stains and grime from floors.
          
          **Benefits:**
          - Deep cleans and removes stains from tiles, marble, and wooden floors.
          - Leaves a fresh, clean fragrance.
          
          **Usage:**
          - Mix 50g of cleaner with 1 liter of water. Apply to the surface, scrub, and rinse.
        `
      },
      {
        id: 5,
        name: "Liya Original Phenyle",
        category: "Phenyle",
        price: 200,
        unit: "50gms",
        image: p2,
        shortDescription: "A strong disinfectant that kills germs and keeps surfaces clean and fresh.",
        fullDescription: `
          Liya Original Phenyle is a powerful disinfectant that kills 99.9% of germs and keeps your space hygienic.
          
          **Benefits:**
          - Disinfects and sanitizes surfaces.
          - Provides a refreshing and long-lasting fragrance.
          
          **Usage:**
          - Mix 50g of phenyle with water and use it to clean floors, bathrooms, and other surfaces.
        `
      },
      {
        id: 6,
        name: "Liya Original Phenyle",
        category: "Phenyle",
        price: 300,
        unit: "30 tablets",
        image: p3,
        shortDescription: "Tablets for easy disinfection and cleaning, just dissolve in water and use.",
        fullDescription: `
          Liya Phenyle Tablets are easy-to-use dissolvable tablets for cleaning and disinfecting surfaces.
          
          **Benefits:**
          - Convenient tablet form for easy mixing.
          - Effective against bacteria, germs, and viruses.
          
          **Usage:**
          - Dissolve 1 tablet in 1 liter of water and use for cleaning surfaces and floors.
        `
      },
      {
        id: 7,
        name: "Liya Acid",
        category: "Stain Remover",
        price: 199,
        unit: "10 Pics",
        image: p4,
        shortDescription: "A powerful acid-based cleaner that removes stains and grime from tiles and bathroom surfaces.",
        fullDescription: `
          Liya Acid is a stain remover that effectively cleans tough stains from bathroom tiles, sinks, and toilets.
          
          **Benefits:**
          - Removes tough stains from tiles and bathroom surfaces.
          - Works on hard water stains and soap scum.
          
          **Usage:**
          - Apply the cleaner to the surface, wait for 10-15 minutes, and scrub with a brush. Rinse thoroughly with water.
        `
      },
      {
        id: 8,
        name: "Liya Original Phenyle",
        category: "Phenyle",
        price: 180,
        unit: "50ml",
        image: p5,
        shortDescription: "A small bottle of powerful disinfectant to keep your home clean and fresh.",
        fullDescription: `
          Liya Original Phenyle (50ml) is a compact disinfectant for small-scale cleaning.
          
          **Benefits:**
          - Kills germs and bacteria.
          - Keeps your surroundings fresh and hygienic.
          
          **Usage:**
          - Mix 50ml in 1 liter of water and use for cleaning floors, toilets, and other surfaces.
        `
      },
      {
        id: 15,
        name: "Yal Natural Hair Oil",
        category: "Hair Oil",
        price: 90,
        unit: "10ml",
        image: p12,
        shortDescription: "A natural hair oil that strengthens and nourishes your hair for a smooth, shiny look.",
        fullDescription: `
          Yal Natural Hair Oil is designed to support healthy hair growth and strengthen roots.
          
          **Benefits:**
          - Promotes natural hair growth.
          - Provides nourishment for silky, smooth hair.
          
          **Usage:**
          - Apply a few drops to your scalp and massage it gently. Leave it for 30 minutes and wash. Use twice a week for better results.
        `
      },
      {
        id: 16,
        name: "Coconut Oil Veterinary Soap",
        category: "Veterinary Soap",
        price: 90,
        unit: "10ml",
        image: p13,
        shortDescription: "A natural soap for animals to maintain healthy, clean, and shiny coats.",
        fullDescription: `
          Coconut Oil Veterinary Soap keeps animal coats clean and shiny.
          
          **Benefits:**
          - Helps remove dirt and parasites from animal skin.
          - Promotes a shiny and healthy coat.
          
          **Usage:**
          - Wet the animal's coat, apply the soap, and lather. Rinse thoroughly with water.
        `
      },
      {
        id: 17,
        name: "Liya Floor Cleaner",
        category: "Floor Cleaner",
        price: 90,
        unit: "10ml",
        image: p14,
        shortDescription: "A powerful, compact floor cleaner that eliminates dirt and grime with ease.",
        fullDescription: `
          Liya Floor Cleaner (10ml) is a compact, powerful cleaning agent for quick and effective cleaning.
          
          **Benefits:**
          - Cleans floors, tiles, and wooden surfaces.
          - Removes stains and grime with ease.
          
          **Usage:**
          - Mix 10ml with water and clean floors using a mop or sponge.
        `
      }
    ];
  
  const ProductCard = ({ product, onReadMore }) => (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-sm font-medium text-gray-500 mb-4">
            {product.category}
          </p>
          <p className="text-gray-700 text-sm">{product.shortDescription}</p>
        </div>
        <button
          className="mt-4 text-blue-600 font-medium hover:underline"
          onClick={() => onReadMore(product)}
        >
          Read More
        </button>
      </div>
    </div>
  );
  
  const Modal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex text-start justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-sm w-full max-h-[90vh] overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <button
              className="text-gray-500 hover:text-gray-800 text-xl"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
  
          {/* Scrollable Content */}
          <div
            className="overflow-y-auto flex-grow mb-4 pr-2"
            style={{ maxHeight: "calc(90vh - 100px)" }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4">
              {product.category}
            </p>
            <p className="text-gray-700 text-sm whitespace-pre-line">
              {product.fullDescription}
            </p>
          </div>
  
          {/* Close Button */}
          <button
            className="mt-4 bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
  
  
  const ProductDisplay = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const handleReadMore = (product) => {
      setSelectedProduct(product);
    };
  
    const handleClose = () => {
      setSelectedProduct(null);
    };
  
    return (
      <div className="p-4 sm:p-6 lg:p-8 bg-gray-100">
              <h1 className="text-4xl font-bold text-green-700 text-center mb-6">PRODUCTS DETAILS</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
        {selectedProduct && <Modal product={selectedProduct} onClose={handleClose} />}
      </div>
    );
  };
  
  export default ProductDisplay;