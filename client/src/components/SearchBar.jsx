import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setcity] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setcity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
