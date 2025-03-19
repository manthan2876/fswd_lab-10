import { useState, useEffect } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

const API_KEY = "b1fdbd176939093fefcb8a7889e02474";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Mumbai");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const locationResponse = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );

        if (locationResponse.data.length === 0) {
          console.error("City not found");
          setWeather(null);
          return;
        }

        const { lat, lon } = locationResponse.data[0];

        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        setWeather(weatherResponse.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <WeatherSearch onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
