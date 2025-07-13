import React, { useState } from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* Desktop & Tablet */}
      <div className="items-center justify-between hidden w-full h-full md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="object-cover w-8" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>
        <div className="flex items-center">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="text-base transition-all duration-100 ease-out cursor-pointer text-textColor hover:text-headingColor">
              Home
            </li>
            <li className="text-base transition-all duration-100 ease-out cursor-pointer text-textColor hover:text-headingColor">
              Menu
            </li>
            <li className="text-base transition-all duration-100 ease-out cursor-pointer text-textColor hover:text-headingColor">
              About Us
            </li>
            <li className="text-base transition-all duration-100 ease-out cursor-pointer text-textColor hover:text-headingColor">
              Service
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="ml-8 text-2xl cursor-pointer text-textColor" />
            <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
              <p className="text-xs font-semibold text-white ">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              className="ml-4 w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute right-0 flex flex-col w-40 rounded-lg shadow-xl bg-gray-50 top-12"
              >
                {user && user.email === "shahnawazjawed9@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="flex items-center justify-between w-full h-full md:hidden ">
        {/* <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
              <p className="text-xs font-semibold text-white">
                {cartItems.length}
              </p>
            </div>
          )}
        </div> */}

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-8" alt="logo" />
          <p className="text-xl font-bold text-headingColor"> City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute right-0 flex flex-col w-40 rounded-lg shadow-xl bg-gray-50 top-12"
            >
              {user && user.email === "shahnawazjawed9@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li
                  className="px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-slate-100"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-slate-100"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-slate-100"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor hover:bg-slate-100"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="flex items-center justify-center gap-3 p-2 m-2 text-base transition-all duration-100 ease-in-out bg-gray-200 rounded-md shadow-md cursor-pointer hover:bg-gray-300 text-textColor"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
