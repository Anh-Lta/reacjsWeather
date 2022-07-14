import "./App.css";
import React, { useState } from "react";
// import axios from "axios";
function App() {
  const apiKey = "e1dacde58f37a6f191f5579359752095";
  const [weatherData, setData] = useState({});
  const [location, setLocation] = useState("");
  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter location..."
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city"> {weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}
      {weatherData.cod === "404" ? <p>Not found your city</p> : <></>}
    </div>
  );
}

export default App;
