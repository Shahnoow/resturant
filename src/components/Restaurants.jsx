import React from "react";

// Import all restaurant logos
import wilmingtonLogo from "../img/cheff.png";
import kenningtonLogo from "../img/cheff.png";
import kingsArmsLogo from "../img/cheff.png"
import victoriaLogo from "../img/cheff.png";
import lanesLogo from "../img/cheff.png";
import andoverArmsLogo from "../img/cheff.png";

// Import illustrations
import wilmingtonIllustration from "../img/cheff.png";
import newsletterIllustration from "../img/cheff.png";
import heroImage from "../img/cheff.png";

const Restaurants = () => {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Header */}
      <section className="px-4 py-12 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Restaurants</h1>
          <p className="mb-8 text-gray-600">
            Egestas sed tempus urna et pharetra pharetra massa. Fermentum
            posuere urna nec tincidunt praesent semper.
          </p>
          <img
            src={heroImage}
            alt="Restaurants hero"
            className="object-contain w-32 h-32 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Section 2: Restaurant of the Month */}
      <section className="px-4 py-12 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Restaurant of the Month
          </h2>

          <div className="flex flex-col items-center gap-8 p-8 mb-16 bg-white rounded-lg shadow-md md:flex-row">
            {/* Restaurant Logo */}
            <div className="flex justify-center md:w-1/3">
              <img
                src={wilmingtonLogo}
                alt="The Wilmington logo"
                className="object-contain w-32 h-32 rounded-full"
              />
            </div>

            <div className="md:w-2/3">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                The Wilmington
              </h3>
              <p className="mb-4 text-lg text-primary">
                Choose 2 lunches, pay for one
              </p>
              <button className="px-6 py-2 font-bold text-white transition rounded-lg bg-primary hover:bg-primary-dark">
                Order Now
              </button>
            </div>

            {/* Restaurant Illustration */}
            <div className="w-full h-48 mt-4 rounded-lg md:w-1/3 md:mt-0">
              <img
                src={wilmingtonIllustration}
                alt="The Wilmington restaurant"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* Restaurant Listings */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Restaurant 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={kenningtonLogo}
                  alt="Kennington Lane Cafe logo"
                  className="object-contain w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  Kennington Lane Cafe
                </h3>
              </div>
              <p className="mb-2 text-sm text-gray-500">
                american steakhouse seafood
              </p>
              <p className="text-gray-600">
                Non enim praesent elementum facilisis leo vel fringilla. Lectus
                proin nibh nisl condimentum id. Quis varius quam quisque id diam
                vel.
              </p>
            </div>

            {/* Restaurant 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={wilmingtonLogo}
                  alt="The Wilmington logo"
                  className="object-contain w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  The Wilmington
                </h3>
              </div>
              <p className="mb-2 text-sm text-gray-500">
                american steakhouse seafood
              </p>
              <p className="text-gray-600">
                Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit
                adipiscing bibendum est ultricies integer. Sed adipiscing diam
                donec adipiscing tristique.
              </p>
            </div>

            {/* Restaurant 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={kingsArmsLogo}
                  alt="Kings Arms logo"
                  className="object-contain w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800">Kings Arms</h3>
              </div>
              <p className="mb-2 text-sm text-gray-500">
                healthy steakhouse vegetarian
              </p>
              <p className="text-gray-600">
                Tortor at risus viverra adipiscing at in tellus. Cras semper
                auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi.
                Sed adipiscing diam.
              </p>
            </div>

            {/* Restaurant 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={victoriaLogo}
                  alt="The Victoria logo"
                  className="object-contain w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  The Victoria
                </h3>
              </div>
              <p className="mb-2 text-sm text-gray-500">
                american steakhouse seafood
              </p>
              <p className="text-gray-600">
                Non enim praesent elementum facilisis leo vel fringilla. Lectus
                proin nibh nisl condimentum id. Quis varius quam quisque id diam
                vel.
              </p>
            </div>

            {/* Restaurant 5 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={lanesLogo}
                  alt="Lanes of London logo"
                  className="object-contain w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  Lanes of London
                </h3>
              </div>
              <p className="mb-2 text-sm text-gray-500">
                american steakhouse seafood
              </p>
              <p className="text-gray-600">
                At erat pellentesque adipiscing commodo elit at imperdiet dui.
                Suspendisse faucibus interdum posuere lorem. Elit sed vulputate
                mi sit.
              </p>
            </div>

            {/* Restaurant 6 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={andoverArmsLogo}
                  alt="The Andover Arms logo"
                  className="object-contain w-16 h-16 rounded-full"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  The Andover Arms
                </h3>
              </div>
              <p className="mb-2 text-sm text-gray-500">
                healthy steakhouse vegetarian
              </p>
              <p className="text-gray-600">
                Lacus vestibulum sed arcu non odio euismod lacinia at. Id neque
                aliquam vestibulum morbi. Ante metus dictum ullamcorper a lacus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Newsletter */}
      <section className="px-4 py-12 text-white md:px-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="h-64 rounded-lg md:w-1/2">
              <img
                src={newsletterIllustration}
                alt="Newsletter subscription"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold">
                Get the menu of your favorite restaurants every day
              </h2>
              <div className="flex flex-col gap-4 mt-8 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-grow px-4 py-3 text-gray-800 rounded-lg focus:outline-none"
                />
                <button className="px-6 py-3 font-bold transition bg-white rounded-lg text-primary hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
