import React from "react";
import BurgersSteaksPizza from "../img/cheff.png";

const FoodFavorites = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
      {/* Left Image with Background */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="absolute -top-4 -left-4 w-56 h-56 md:w-72 md:h-72 bg-orange-400 rounded-[40%_60%_30%_70%]"></div>
        <img
          src={BurgersSteaksPizza}
          alt="Burgers, Steaks and Pizza"
          className="relative z-10 w-64 md:w-80 object-contain"
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Food from your favorite restaurants to your table
        </h2>
        <p className="text-gray-700 mb-6 max-w-full md:max-w-lg text-sm md:text-base">
          Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec
          massa sapien faucibus et molestie. Vitae elementum curabitur vitae
          nunc.
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default FoodFavorites;
