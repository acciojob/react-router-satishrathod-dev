import React from "react";
import "./../styles/App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  return (
    <div className="App">
      {/* Do not remove the main div */}
      Hey there!!
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
