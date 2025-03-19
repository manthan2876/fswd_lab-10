import { useState, useEffect } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

const API_KEY = "b1fdbd176939093fefcb8a7889e02474";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Mumbai"); // Default city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
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
