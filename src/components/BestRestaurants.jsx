// src/components/BestRestaurants.jsx
import React from "react";

// Sample logos
import KenningtonLogo from "../img/logos-1.jpg";
import WilmingtonLogo from "../img/logos-2.jpg";
import KingsArmsLogo from "../img/logos-3.jpg";

const restaurants = [
  {
    id: 1,
    logo: KenningtonLogo,
    name: "Kennington Lane Cafe",
    categories: ["american", "steakhouse", "seafood"],
    description:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    id: 2,
    logo: WilmingtonLogo,
    name: "The Wilmington",
    categories: ["american", "steakhouse", "seafood"],
    description:
      "Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.",
  },
  {
    id: 3,
    logo: KingsArmsLogo,
    name: "Kings Arms",
    categories: ["healthy", "steakhouse", "vegetarian"],
    description:
      "Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam donec adipiscing tristique.",
  },
];

const BestRestaurants = () => {
  return (
    <section className="max-w-6xl p-6 mx-auto mb-24">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Heading + Paragraph */}
        <div className="md:w-full">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-[40px] font-bold">
            12 Best Restaurants in Your City
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate.
          </p>
        </div>

        {/* Restaurants List */}
        {restaurants.map(({ id, logo, name, categories, description }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-bold">{name}</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm border border-orange-500 text-orange-500 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestRestaurants;
