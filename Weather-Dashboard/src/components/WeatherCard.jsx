// import React from "react";
import PropTypes from "prop-types";

const WeatherCard = ({ weather }) => {
  // Destructure and provide default value for windSpeed
  const { windSpeed = 0 } = weather;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-4">
      <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
        {weather.city}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.condition}
        className="w-24 h-24 mx-auto mb-4"
      />
      <p className="text-gray-700 text-center mb-2">
        Temperature: <span className="font-semibold">{weather.temp} °C</span>
      </p>
      <p className="text-gray-700 text-center mb-2">
        Humidity: <span className="font-semibold">{weather.humidity} %</span>
      </p>
      <p className="text-gray-700 text-center">
        Wind Speed: <span className="font-semibold">{windSpeed} km/h</span>
      </p>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number,
    condition: PropTypes.string, // Optional property
  }).isRequired,
};

export default WeatherCard;
