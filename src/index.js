import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StatProvider } from "./components/context/StateProvider";
import { initialState } from "./components/context/initialState";
import reducer from "./components/context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StatProvider initialState={initialState} reducer={reducer}>
      <App />
    </StatProvider>
  </Router>
);
