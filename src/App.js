import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat={51.5156177}&lon={-0.0919983}&appid={ec44097367c21b22741356982e567b7b}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && (
        <div>
          <h2>Weather for {weather.name}</h2>
          {/* <p>Temperature: {weather.main.temp}°C</p> */}
          {/* <p>Weather: {weather.weather[0].main}</p> */}
          {/* <p>Description: {weather.weather[0].description}</p> */}
        </div>
      )}
    </div>
  );
};

export default App;
