import React, { useState } from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import AccountSettings from "./AccountSettings";

const Navbar = () => {
  const [{ user, cartItems }, dispatch] = useStateValue(); // Added user to destructuring
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: true,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* Desktop & Tablet */}
      <div className="items-center justify-between hidden w-full h-full md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-8" alt="logo" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24"
          >
            {["Home", "Menu", "About Us", "Service"].map((label, idx) => (
              <li
                key={idx}
                className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor"
              >
                {label}
              </li>
            ))}
          </motion.ul>

          {user && ( // Only show cart if user is logged in
            <div
              className="relative flex items-center justify-center cursor-pointer"
              onClick={showCart}
            >
              <MdShoppingBasket className="text-2xl text-textColor" />
              {cartItems?.length > 0 && (
                <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
                  <p className="text-xs font-semibold text-white">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </div>
          )}
          <AccountSettings />
        </div>
      </div>

      {/* Mobile - Updated Layout */}
      <div className="flex items-center justify-between w-full h-full md:hidden">
        {/* Left Side - Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 rounded-full focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <MdClose className="text-2xl text-textColor" />
          ) : (
            <MdMenu className="text-2xl text-textColor" />
          )}
        </button>

        {/* Center - Logo */}
        <Link to={"/"} className="absolute transform -translate-x-1/2 left-1/2">
          <div className="flex items-center gap-2">
            <img src={Logo} className="object-cover w-8" alt="logo" />
            <p className="text-xl font-bold text-headingColor">City</p>
          </div>
        </Link>

        {/* Right Side - Cart + Account */}
        <div className="flex items-center gap-4">
          {user && ( // Only show cart if user is logged in
            <div
              className="relative flex items-center justify-center"
              onClick={showCart}
            >
              <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
              {cartItems?.length > 0 && (
                <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
                  <p className="text-xs font-semibold text-white">
                    {cartItems.length}
                  </p>
                </div>
              )}
            </div>
          )}
          <AccountSettings />
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 px-4 py-2 bg-white shadow-lg top-16"
          >
            <ul className="flex flex-col gap-2">
              {["Home", "Menu", "About Us", "Service"].map((item) => (
                <li
                  key={item}
                  className="px-3 py-2 rounded-md text-textColor hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
