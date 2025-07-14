import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";
import MenuContainer from "./MenuContainer";

const MainContainer = () => {
  const [{ food_items, cartShow }] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  // Optional: Scroll trigger effect if RowContainer uses useEffect on scrollValue
  useEffect(() => {}, [scrollValue]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <HomeContainer />

      {/* Fruits Section */}
      <section className="w-full my-6">
        <div className="flex items-center justify-between w-full px-4 md:px-16">
          <p className="relative text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600">
            Our fresh & healthy fruits
          </p>

          <div className="items-center hidden gap-3 md:flex">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-500 hover:shadow-lg"
              onClick={() => setScrollValue((prev) => prev - 200)}
              title="Scroll Left"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-500 hover:shadow-lg"
              onClick={() => setScrollValue((prev) => prev + 200)}
              title="Scroll Right"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={food_items?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
