import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/weather?city=${city}`,
      );
      setWeather(response.data);
    } catch (err) {
      setError("Error fetching weather data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Dashboard;
