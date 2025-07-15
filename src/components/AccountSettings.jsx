import React, { useState } from "react";
import { MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const AccountSettings = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const logout = () => {
    setIsMenuOpen(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <div className="relative">
      {/* Avatar Button (Visible on all screens) */}
      <motion.img
        whileTap={{ scale: 0.9 }}
        src={user ? user.photoURL : Avatar}
        className="w-10 h-10 border-2 border-white rounded-full shadow-lg cursor-pointer"
        alt="userprofile"
        onClick={login}
      />

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute right-0 z-50 w-48 p-2 bg-white rounded-lg shadow-xl md:right-auto md:left-0 top-12"
        >
          {user?.email === "shahnawazjawed9@gmail.com" && (
            <Link to="/createItem">
              <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                <MdAdd />
                <span>New Item</span>
              </div>
            </Link>
          )}
          <div
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            onClick={logout}
          >
            <MdLogout />
            <span>Logout</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AccountSettings;
