import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
// import HowItWorks from "./HowItWorks";

const HomeContainer = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2" id="home">
      <div className="flex flex-col items-start justify-center flex-1 gap-6 py-2">
        {/* Left content remains the same */}
        <div className="flex items-center justify-center gap-2 px-4 py-1 bg-orange-100 rounded-full">
          <p className="text-base font-semibold text-orange-500">
            Bike Delivery
          </p>
          <div className="w-8 h-8 overflow-hidden bg-white rounded-full drop-shadow-xl">
            <img
              src={Delivery}
              className="object-contain w-full h-full"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Get ready for the quickest delivery in town! Fresh, hot, and delicious
          meals zooming straight to your door—no waiting, just pure flavor and
          satisfaction delivered fast. Don’t just crave it, get it NOW!
        </p>

        <button
          type="button"
          className="w-full px-4 py-2 transition-all duration-100 ease-in-out rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto hover:shadow-lg"
        >
          Order Now
        </button>
      </div>

      {/* Right content with improved mobile responsiveness */}
      <div className="relative flex items-center flex-1 py-2">
        <img
          src={HeroBg}
          className="w-full ml-auto h-[300px] md:h-420 lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="absolute top-0 left-0 flex flex-wrap items-center justify-center w-full h-full gap-2 px-2 py-4 md:gap-4 lg:px-20">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="flex flex-col items-center justify-center w-24 p-2 h-36 md:w-32 md:h-44 lg:w-190 lg:h-auto bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-12 -mt-6 md:w-16 md:-mt-8 lg:w-40 lg:-mt-20"
                  alt={n.name}
                />
                <p className="mt-1 text-xs font-semibold md:text-sm lg:text-xl text-textColor lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[8px] md:text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-xs font-semibold md:text-sm text-headingColor">
                  <span className="text-[10px] text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
      {/* <HowItWorks /> */}
    </section>
  );
};

export default HomeContainer;
