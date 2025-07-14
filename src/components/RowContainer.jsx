import { useEffect, useRef } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../img/NotFound.svg";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [{ cartItems }, dispatch] = useStateValue();

  // Scroll effect
  useEffect(() => {
    if (rowContainer.current) {
      rowContainer.current.scrollLeft += scrollValue;
    }
  }, [scrollValue]);

  // Handler to add item to cart
  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    let updatedCart = [];

    if (existingItem) {
      // If exists, increase qty
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
    } else {
      // If new item, add with qty 1
      updatedCart = [...cartItems, { ...item, qty: 1 }];
    }

    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: updatedCart,
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="flex items-center justify-between w-full">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt={item?.title || "Food item"}
                  className="object-contain w-full h-full"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="flex items-center justify-center w-8 h-8 -mt-8 bg-red-600 rounded-full cursor-pointer hover:shadow-md"
                onClick={() => addToCart(item)}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="flex flex-col items-end justify-end w-full -mt-8">
              <p className="text-base font-semibold text-textColor md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg font-semibold text-headingColor">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <img src={NotFound} alt="Not Found" className="h-340" />
          <p className="my-2 text-xl font-semibold text-headingColor">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
