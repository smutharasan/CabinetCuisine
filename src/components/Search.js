import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="header">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pantry-powered recipes..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </form>
  );
};

export default Search;
