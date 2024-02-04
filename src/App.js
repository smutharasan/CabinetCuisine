import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About"; // Import your new component
import Search from "./components/Search"; // Import your new component
import Searched from "./components/Searched";
import Dashboard from "./components/Dashboard";
import ScrambledEggsRecipe from "./components/ScrambledEggsRecipe";
import ChatWidget from "./components/ChatWidget";
function App() {
  return (
    <Routes>
      {/* Define your routes here */}
<<<<<<< HEAD
      <Route path="/contact" element={<Contact />} />
      <Route path="/searched/:search" element={<Searched />} />
=======
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<Search />} />
>>>>>>> c2343bbb9100dfb24602b6da15475d6cac95d748
      <Route path="/chat" element={<ChatWidget />} />
      <Route path="/recipe/abc" element={<ScrambledEggsRecipe />} />
      {/* Add more routes as needed */}

      {/* Default route */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
