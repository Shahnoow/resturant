import React, { useState } from "react";
import { MdAdd, MdLogout, MdEmail, MdLock, MdPerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  //   FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const AccountSettings = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  //   const facebookProvider = new FacebookAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authView, setAuthView] = useState("login"); // 'login' or 'signup'
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Google Login
  const loginWithGoogle = async () => {
    try {
      const {
        user: { providerData },
      } = await signInWithPopup(auth, googleProvider);
      updateUserState(providerData[0]);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // Facebook Login
  //   const loginWithFacebook = async () => {
  //     try {
  //       const {
  //         user: { providerData },
  //       } = await signInWithPopup(auth, facebookProvider);
  //       updateUserState(providerData[0]);
  //     } catch (error) {
  //       console.error("Facebook login error:", error);
  //     }
  //   };

  // Email/Password Signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      updateUserState({
        displayName: formData.name,
        email: user.email,
        photoURL: Avatar,
      });
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      updateUserState({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || Avatar,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const updateUserState = (userData) => {
    dispatch({
      type: actionType.SET_USER,
      user: userData,
    });
    localStorage.setItem("user", JSON.stringify(userData));
    setIsMenuOpen(false);
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
      {/* Avatar Button */}
      <motion.img
        whileTap={{ scale: 0.9 }}
        src={user ? user.photoURL : Avatar}
        className="w-10 h-10 border-2 border-white rounded-full shadow-lg cursor-pointer"
        alt="userprofile"
        onClick={() =>
          user ? setIsMenuOpen(!isMenuOpen) : setAuthView("login")
        }
      />

      {/* Auth Dropdown */}
      {(!user || isMenuOpen) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute right-0 z-50 p-4 bg-white rounded-lg shadow-xl w-72 md:right-0 md:left-auto top-12"
        >
          {user ? (
            // User is logged in - show account menu
            <>
              {user.email === "shahnawazjawed9@gmail.com" && (
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
            </>
          ) : (
            // User is not logged in - show auth forms
            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  onClick={loginWithGoogle}
                  className="flex items-center justify-center w-full p-2 border rounded-md hover:bg-gray-50"
                >
                  <FcGoogle className="text-xl" />
                </button>
                {/* <button
                  onClick={loginWithFacebook}
                  className="flex items-center justify-center w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  <FaFacebook className="text-xl" />
                </button> */}
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 text-sm text-gray-500 bg-white">
                    OR
                  </span>
                </div>
              </div>

              {authView === "login" ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <MdEmail className="text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <MdLock className="text-gray-500" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
                  >
                    Login
                  </button>
                  <p className="text-sm text-center text-gray-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthView("signup")}
                      className="text-orange-500 hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <MdPerson className="text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <MdEmail className="text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <MdLock className="text-gray-500" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthView("login")}
                      className="text-orange-500 hover:underline"
                    >
                      Login
                    </button>
                  </p>
                </form>
              )}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AccountSettings;
