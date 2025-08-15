// App.js
import React, { useEffect, useCallback } from "react";
import { MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";

import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/supabaseFunction";
import { actionType } from "./context/reducer";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HowItWorks from "./components/HowItWorks";
// import BestRestaurants from "./components/BestRestaurants";
// import ServiceStats from "./components/ServiceStats";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Restaurants from "./components/Restaurants";
import MenuPage from "./components/MenuPage";
import ServicePage from "./components/ServicePage";

function App() {
  const [, dispatch] = useStateValue();

  const fetchData = useCallback(async () => {
    const data = await getAllFoodItems();
    dispatch({
      type: actionType.SET_FOOD_ITEMS,
      food_items: data,
    });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="relative flex flex-col w-screen h-auto bg-primary">
        <Navbar />

        <main className="w-full px-4 py-4 mt-14 md:mt-20 md:px-16">
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/best-restaurants" element={<Restaurants />} />
            <Route path="/service-stats" element={<ServicePage />} />
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{
            borderRadius: "8px",
            padding: "12px 16px",
            margin: "8px 0",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </AnimatePresence>
  );
}

export default App;
