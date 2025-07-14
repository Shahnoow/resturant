import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2" id="home">
      {/* Left Section */}
      <div className="flex flex-col items-start justify-center gap-6 px-4 py-6 md:px-8">
        <div className="flex items-center gap-2 px-4 py-1 bg-orange-100 rounded-full">
          <p className="text-base font-semibold text-orange-500">
            Bike Delivery
          </p>
          <div className="w-8 h-8 overflow-hidden bg-white rounded-full drop-shadow-xl">
            <img
              src={Delivery}
              alt="Bike Delivery Icon"
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <h1 className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor leading-tight">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </h1>

        <p className="text-base text-center text-textColor md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          est nam voluptatum porro iusto deserunt. Minus eos sunt dolores
          repellat suscipit.
        </p>

        <button
          type="button"
          className="w-full px-6 py-2 font-semibold text-white transition-all duration-150 ease-in-out rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 hover:shadow-lg md:w-auto"
        >
          Order Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center py-4">
        <img
          src={HeroBg}
          alt="Hero Background"
          className="object-contain w-full ml-auto h-420 lg:w-auto lg:h-650"
          loading="lazy"
        />

        <div className="absolute top-0 left-0 z-10 flex flex-wrap items-center justify-center w-full h-full gap-4 px-4 py-4 lg:px-20">
          {heroData?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-20 -mt-10 lg:w-40 lg:-mt-20"
                loading="lazy"
              />
              <p className="mt-2 text-base font-semibold lg:text-xl text-textColor lg:mt-4">
                {item.name}
              </p>
              <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3 text-center">
                {item.decp}
              </p>
              <p className="text-sm font-semibold text-headingColor">
                <span className="text-xs text-red-600">$</span> {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
