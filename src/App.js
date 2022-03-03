/** @format */

import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Pagetwo from "./components/pagetwo/Pagetwo";
import Solutions from "./components/Solutions/Solutions";
import Home from "./pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Pagetwo />
      <Solutions />
    </React.Fragment>
  );
}

export default App;
