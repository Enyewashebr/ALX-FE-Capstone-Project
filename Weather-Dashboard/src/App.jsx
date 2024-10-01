import { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import "./index.css";

const API_KEY = "1c6f3e48f7e13480a3f7b4df99ea8417";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = useCallback(async (city) => {
    setError("");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found. Try again!!");

      const data = await response.json();
      const weatherData = {
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
        condition: data.weather[0].description,
      };
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    }
  }, []); // Stable function reference

  useEffect(() => {
    const interval = setInterval(() => {
      if (weather) {
        fetchWeather(weather.city);
      }
    }, 600000); // 10 minutes
    return () => clearInterval(interval);
  }, [weather, fetchWeather]); // Include fetchWeather here

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && (
        <div className="error-message">
          <ErrorMessage message={error} />
        </div>
      )}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
