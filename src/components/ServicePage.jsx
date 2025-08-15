import React from "react";
import {
  IoRestaurant,
  IoCheckmarkCircle,
  IoPricetags,
  IoStar,
  IoWine,
  IoCart,
} from "react-icons/io5";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const services = [
  {
    icon: <IoRestaurant size={40} className="text-orange-500" />,
    title: "Dining Guides",
    desc: "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
  },
  {
    icon: <IoCheckmarkCircle size={40} className="text-orange-500" />,
    title: "100% Fresh Food",
    desc: "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
  },
  {
    icon: <IoPricetags size={40} className="text-orange-500" />,
    title: "Special Offers and Discounts",
    desc: "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
  },
  {
    icon: <IoStar size={40} className="text-orange-500" />,
    title: "Restaurant Reviews",
    desc: "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
  },
  {
    icon: <IoWine size={40} className="text-orange-500" />,
    title: "Food Testing Events",
    desc: "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
  },
  {
    icon: <IoCart size={40} className="text-orange-500" />,
    title: "Online Ordering",
    desc: "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
  },
];

const ServicePage = () => {
  return (
    <div className="max-w-6xl px-4 py-12 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center">Services</h1>

      <div className="grid grid-cols-1 gap-10 mb-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 text-center transition bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Download App Section */}
      <section className="flex flex-col items-center p-8 text-center rounded-lg bg-orange-50">
        <div className="flex items-center gap-3 mb-4">
          {/* Replace below with your actual icon or image */}
          <div className="text-4xl text-orange-600">📲</div>
          <h2 className="text-3xl font-bold">Download food app Order today!</h2>
        </div>

        <p className="max-w-md mb-8 text-gray-700">
          Get easy access to delicious meals right at your fingertips. Order now
          from our app!
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-white transition bg-black rounded-lg hover:bg-gray-800"
          >
            <FaApple size={24} /> <span>Get it on App Store</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
          >
            <FaGooglePlay size={24} /> <span>Get it on Google Play</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
