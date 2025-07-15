// AccountSettings.jsx
import React, { useState, useRef, useEffect } from "react";
import { MdAdd, MdLogout, MdEmail, MdLock, MdPerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { toast } from "react-toastify";

const toastStyles = {
  success: {
    background: "#4BB543",
    color: "#fff",
  },
  error: {
    background: "#FF3333",
    color: "#fff",
  },
  info: {
    background: "#33B5FF",
    color: "#fff",
  },
};

const AccountSettings = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authView, setAuthView] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveUserToFirestore = async (userData) => {
    if (!userData?.uid) return;

    const userRef = doc(firestore, "users", userData.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        name: userData.displayName || "No Name",
        email: userData.email,
        photoURL: userData.photoURL || Avatar,
        createdAt: serverTimestamp(),
      });
    }
  };

  const updateUserState = async (userData) => {
    dispatch({
      type: actionType.SET_USER,
      user: userData,
    });
    localStorage.setItem("user", JSON.stringify(userData));

    await saveUserToFirestore(userData);
    setIsMenuOpen(false);
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedInUser = result.user;

      updateUserState({
        uid: loggedInUser.uid,
        displayName: loggedInUser.displayName || "Google User",
        email: loggedInUser.email,
        photoURL: loggedInUser.photoURL || Avatar,
      });
      toast.success("Login successful!", { style: toastStyles.success });
    } catch (error) {
      toast.error("Google login failed!", { style: toastStyles.error });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(user, { displayName: formData.name });

      await updateUserState({
        uid: user.uid,
        displayName: formData.name,
        email: user.email,
        photoURL: Avatar,
      });
      toast.success("Account created successfully!", {
        style: toastStyles.success,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email address already in use.", {
          style: toastStyles.error,
        });
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.", { style: toastStyles.error });
      } else {
        toast.error("Failed to create account.", { style: toastStyles.error });
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      updateUserState({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || Avatar,
      });
      toast.success("Login successful!", { style: toastStyles.success });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email.", {
          style: toastStyles.error,
        });
      } else if (error.code === "auth/wrong-password") {
        toast.error("Wrong password.", { style: toastStyles.error });
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.", { style: toastStyles.error });
      } else {
        toast.error("Failed to login.", { style: toastStyles.error });
      }
    }
  };

  const logout = () => {
    setIsMenuOpen(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    toast.info("Logged out.", { style: toastStyles.info });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.img
        whileTap={{ scale: 0.9 }}
        src={user ? user.photoURL : Avatar}
        className="w-10 h-10 border-2 border-white rounded-full shadow-lg cursor-pointer"
        alt="User Avatar"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute right-0 z-50 p-4 bg-white rounded-lg shadow-xl w-72 md:right-0 md:left-auto top-12"
        >
          {user ? (
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
            <div className="space-y-4">
              <div className="flex gap-4">
                <button
                  onClick={loginWithGoogle}
                  className="flex items-center justify-center w-full p-2 border rounded-md hover:bg-gray-50"
                >
                  <FcGoogle className="text-xl" />
                </button>
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
