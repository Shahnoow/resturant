import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = (updatedItems) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: updatedItems,
    });
  };

  const updateQty = (action, id) => {
    let updatedItems = [...cartItems];

    if (action === "add") {
      updatedItems = updatedItems.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        updatedItems = updatedItems.filter((cartItem) => cartItem.id !== id);
      } else {
        updatedItems = updatedItems.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
          return cartItem;
        });
        setQty(qty - 1);
      }
    }

    setFlag(flag + 1);
    cartDispatch(updatedItems);
  };

  useEffect(() => {
    // This is no longer needed with cartItems coming from state
  }, [qty]);

  return (
    <div className="flex items-center w-full gap-2 p-1 px-2 rounded-lg bg-cartItem">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt={item?.title || "Cart item"}
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="block text-sm font-semibold text-gray-300">
          ${parseFloat(item?.price * qty).toFixed(2)}
        </p>
      </div>

      {/* button section */}
      <div className="flex items-center gap-2 ml-auto cursor-pointer group">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="flex items-center justify-center w-5 h-5 rounded-sm bg-cartBg text-gray-50">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
