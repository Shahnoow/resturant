import React, { useState } from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import AccountSettings from "./AccountSettings";

const Navbar = () => {
  const [{ user, cartItems }, dispatch] = useStateValue();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);

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
          <p className="text-xl font-bold text-headingColor">Foodzy</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="relative flex items-center gap-12"
          >
            <li>
              <Link
                to="/"
                className="text-lg transition-all duration-100 text-textColor hover:text-headingColor"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-lg transition-all duration-100 text-textColor hover:text-headingColor"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg transition-all duration-100 text-textColor hover:text-headingColor"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/service-stats"
                className="text-lg transition-all duration-100 text-textColor hover:text-headingColor"
              >
                Service
              </Link>
            </li>

            {/* Restaurant Dropdown */}
            <li className="relative cursor-pointer group">
              <span className="text-lg transition-all duration-100 text-textColor hover:text-headingColor">
                Restaurant
              </span>
              <ul className="absolute left-0 z-10 hidden w-48 p-2 bg-white rounded-lg shadow-md top-full group-hover:block">
                <li className="px-4 py-2 rounded-md hover:bg-gray-100">
                  <Link to="/best-restaurants" className="block text-sm">
                    Restaurant
                  </Link>
                </li>
                <li className="px-4 py-2 text-sm rounded-md hover:bg-gray-100">
                  Restaurant Card
                </li>
                <li className="px-4 py-2 text-sm rounded-md hover:bg-gray-100">
                  Offer
                </li>
              </ul>
            </li>
          </motion.ul>

          {user && (
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

      {/* Mobile */}
      <div className="flex items-center justify-between w-full h-full md:hidden">
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

        <Link to={"/"} className="absolute transform -translate-x-1/2 left-1/2">
          <div className="flex items-center gap-2">
            <img src={Logo} className="object-cover w-8" alt="logo" />
            <p className="text-xl font-bold text-headingColor">Foodzy</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {user && (
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
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-textColor hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="block px-3 py-2 rounded-md text-textColor hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-textColor hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service-stats"
                  className="block px-3 py-2 rounded-md text-textColor hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Service
                </Link>
              </li>

              {/* Restaurant Menu */}
              <li
                className="block px-3 py-2 font-semibold rounded-md cursor-pointer text-textColor"
                onClick={() => setIsRestaurantOpen((prev) => !prev)}
              >
                Restaurant {isRestaurantOpen ? "▲" : "▼"}
              </li>

              {isRestaurantOpen && (
                <ul className="ml-4">
                  <li>
                    <Link
                      to="/best-restaurants"
                      className="block px-3 py-1 text-sm rounded-md text-textColor hover:bg-gray-100"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsRestaurantOpen(false);
                      }}
                    >
                      Restaurant
                    </Link>
                  </li>
                  <li className="px-3 py-1 text-sm text-textColor">
                    Restaurant Card
                  </li>
                  <li className="px-3 py-1 text-sm text-textColor">Offer</li>
                </ul>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
