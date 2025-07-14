import React, { useEffect } from "react";
import { Header, MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";

import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/supabaseFunction";
import { actionType } from "./context/reducer";

function App() {
  const [{ food_items }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        food_items: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="flex flex-col w-screen h-auto bg-primary">
        <Header />

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
