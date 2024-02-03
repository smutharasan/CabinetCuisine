import React from "react";
import { Route, Routes } from "react-router-dom";

import Contact from "./components/Contact"; // Import your new component
import Search from "./components/Search"; // Import your new component
import Dashboard from "./components/Dashboard";
import ScrambledEggsRecipe from "./components/ScrambledEggsRecipe";

function App() {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/contact" element={<Contact/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/recipe/abc" element={<ScrambledEggsRecipe/>} />
      {/* Add more routes as needed */}

      {/* Default route */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
