const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const city = req.query.city;
  console.log(city);

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  console.log(apiKey);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(data);

    const weatherData = {
      temperature: data.main.temp,
      weatherCondition: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
    // console.log(weatherData);

    res.json(data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: "City not found" });
    } else {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching weather data" });
    }
  }
});

module.exports = router;
