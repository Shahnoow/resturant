import React from "react";
// import { motion } from "framer-motion";

// Import all images
import aboutHero from "../img/c1.png";
import missionIllustration from "../img/c1.png";
import statsGirl from "../img/c1.png";

// Import feature icons
import deliveryIcon from "../img/c1.png";
import timeIcon from "../img/c1.png";
import discountIcon from "../img/c1.png";
import foodIcon from "../img/c1.png";

// Import team photos
import kevin from "../img/c1.png";
import roxie from "../img/c1.png";
import edgar from "../img/c1.png";

// Import partner logos
import partner1 from "../img/c1.png";
import partner2 from "../img/c1.png";
import partner3 from "../img/c1.png";
import partner4 from "../img/c1.png";

const AboutUs = () => {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Hero */}
      <section className="px-4 py-12 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">About Us</h1>
          <h2 className="mb-6 text-2xl text-primary">
            Nothing to worry about with Quickeat
          </h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <img
            src={aboutHero}
            alt="Quickeat service"
            className="object-cover w-full h-64 rounded-lg"
          />
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="px-4 py-12 md:px-16 bg-gray-50">
        <div className="flex flex-col items-center max-w-6xl gap-8 mx-auto md:flex-row">
          <div className="md:w-1/2">
            <img
              src={missionIllustration}
              alt="Our mission illustration"
              className="object-cover w-full h-64 rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Our mission is to save you time
            </h2>
            <p className="mb-4 text-gray-600">
              Viverra vitae congue eu consequat ac felis. Imperdiet massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut
              tortor pretium viverra suspendisse potenti nullam ac tortor.
            </p>
            <p className="text-gray-600">
              Eget egestas purus viverra accumsan in nisl nisi scelerisque.
              Tincidunt augue interdum velit euismod in pellentesque.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="px-4 py-12 md:px-16">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={deliveryIcon}
              alt="Free delivery"
              className="w-10 h-10 mb-4"
            />
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Free Delivery
            </h3>
            <p className="text-gray-600">
              Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus
              pulvinar elementum consequat integer enim neque volutpat.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img src={timeIcon} alt="Save time" className="w-10 h-10 mb-4" />
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Save Your Time
            </h3>
            <p className="text-gray-600">
              Vulputate dignissim suspendisse in est ante in nibh mauris.
              Pretium nibh ipsum consequat nisl vel pretium lectus quam id.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={discountIcon}
              alt="Regular discounts"
              className="w-10 h-10 mb-4"
            />
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Regular Discounts
            </h3>
            <p className="text-gray-600">
              Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus
              dictum. Sapien nec sagittis aliquam malesuada bibendum arcu.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img src={foodIcon} alt="Food variety" className="w-10 h-10 mb-4" />
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Variety Food
            </h3>
            <p className="text-gray-600">
              Molestie a iaculis at erat pellentesque. Pulvinar neque laoreet
              suspendisse interdum consectetur libero id faucibus nisl.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Stats */}
      <section className="px-4 py-12 text-white md:px-16 bg-primary">
        <div className="flex flex-col items-center max-w-6xl gap-8 mx-auto md:flex-row">
          <div className="md:w-1/2">
            <img
              src={statsGirl}
              alt="Happy customer"
              className="object-cover w-full h-64 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 md:w-1/2">
            <div className="text-center">
              <h3 className="mb-2 text-5xl font-bold">976</h3>
              <p className="text-lg">Satisfied Customer</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-5xl font-bold">12</h3>
              <p className="text-lg">Best Restaurants</p>
            </div>
            <div className="col-span-2 text-center">
              <h3 className="mb-2 text-5xl font-bold">1k+</h3>
              <p className="text-lg">Food Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section className="px-4 py-12 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Our team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo
              ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat
              vestibulum lectus mauris.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src={kevin}
                alt="Kevin Adamson"
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Kevin Adamson
              </h3>
              <p className="text-gray-600">
                Pellentesque adipiscing commodo elit at imperdiet dui.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src={roxie}
                alt="Roxie Gilbert"
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Roxie Gilbert
              </h3>
              <p className="text-gray-600">
                Velit dignissim sodales ut eu sem integer vitae. Interdum varius
                sit amet mattis.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src={edgar}
                alt="Edgar Johnson"
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Edgar Johnson
              </h3>
              <p className="text-gray-600">
                At erat pellentesque adipiscing commodo elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Partners */}
      <section className="px-4 py-12 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            Our trusted partners
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[partner1, partner2, partner3, partner4].map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt={`Partner ${index + 1}`}
                className="object-contain w-32 h-32"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Newsletter */}
      <section className="px-4 py-12 text-white md:px-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
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
      </section>
    </div>
  );
};

export default AboutUs;
