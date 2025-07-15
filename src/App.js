import React, { useEffect } from "react";
import { MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";

import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/supabaseFunction";
import { actionType } from "./context/reducer";
import AccountSettings from "./components/AccountSettings";
import Navbar from "./components/Navbar";

function App() {
  const [, dispatch] = useStateValue(); // Remove 'food_items' since it's not used

  // Define fetchData outside useEffect so we can add it to dependencies if needed
  const fetchData = React.useCallback(async () => {
    const data = await getAllFoodItems();
    dispatch({
      type: actionType.SET_FOOD_ITEMS,
      food_items: data,
    });
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Add fetchData here

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="relative flex flex-col w-screen h-auto bg-primary">
        {/* Navbar (contains desktop AccountSettings) */}
        <Navbar />

        {/* Mobile AccountSettings (fixed at bottom-left) */}
        <div className="fixed z-50 left-4 bottom-4 md:hidden">
          <AccountSettings />
        </div>

        <main className="w-full px-4 py-4 mt-14 md:mt-20 md:px-16">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
