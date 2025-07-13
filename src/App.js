import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import MianContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="flex flex-col w-screen h-auto bg-primary">
        <Header />
        <main className="w-full p-8 mt-24">
          <Routes>
            <Route path="/*" element={<MianContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
