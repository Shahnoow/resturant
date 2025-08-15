// src/components/Partnership.jsx
import React from "react";
import JoinCourierImg from "../img/photo-6.jpg";
import JoinMerchantImg from "../img/photo-7.jpg";

const Partnership = () => {
  return (
    <section className="bg-gray-900 py-24 w-full items-center justify-center rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Want to Join Partnership?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Join Courier */}
          <div className="relative rounded-lg overflow-hidden border-4 border-orange-500 shadow-lg">
            <img
              src={JoinCourierImg}
              alt="Join Courier"
              className="max-w-full max-h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-4">
                Join Courier
              </h3>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded font-semibold">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Join Merchant */}
          <div className="relative rounded-lg overflow-hidden border-4 border-orange-500 shadow-lg">
            <img
              src={JoinMerchantImg}
              alt="Join Merchant"
              className="max-w-full max-h-full object-cover"
            />
            <div className="absolute inset-0  flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-4">
                Join Merchant
              </h3>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded font-semibold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
