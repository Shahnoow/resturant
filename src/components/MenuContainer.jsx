import { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import { IoFastFood } from "react-icons/io5";
import RowContainer from "./RowContainer";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ food_items }] = useStateValue();

  const handleKeyDown = (e, category) => {
    if (e.key === "Enter" || e.key === " ") {
      setFilter(category);
    }
  };

  return (
    <section className="w-full my-6" id="menu">
      <div className="flex flex-col items-center justify-center w-full">
        <p className="relative mr-auto text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600">
          Our Hot Dishes
        </p>

        <div className="flex items-center justify-start w-full gap-8 py-6 overflow-x-scroll lg:justify-center scrollbar-none">
          {categories.map((category) => {
            const isSelected = filter === category.urlParamName;
            return (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                className={`group ${
                  isSelected ? "bg-cartNumBg" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg`}
                onClick={() => setFilter(category.urlParamName)}
                onKeyDown={(e) => handleKeyDown(e, category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    isSelected ? "bg-white" : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      isSelected ? "text-textColor" : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    isSelected ? "text-white" : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={food_items?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
