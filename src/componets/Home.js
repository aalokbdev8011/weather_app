import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import CountryDropdown from './CountryDropdown';
import Loader from "react-js-loader";
import { getWeather } from '../utils/weatherService';


const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    console.log(`Selected country: ${event.target.value}`);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleGetWeather = () => {
    getWeather(city, selectedCountry, setWeatherData, setIsLoading);
  };


  return (
    <div className="search-container">
      <div className='search-box'>
        <div className="icon">
          <img src="/cloud.svg" alt="Cloud Icon"></img>
        </div>

        <CountryDropdown
          className="language-select"
          onChange={handleCountryChange}
          value={selectedCountry}
        />
        <div className='search-content'>
          <input
            type="text"
            className="location-input"
            placeholder="Please enter your location..."
            value={city}
            onChange={handleCityChange}
          />
          <button className="search-button" onClick={handleGetWeather}>
            <FaSearch size={16} color="#000" />
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="item">
          <Loader
            type="box-rotate-x"
            bgColor="black"
            color="white"
            title={"Loading..."}
            size={100}
          />
        </div>
      )}

      {weatherData && (
        <div className="weather-results">
          <h4>{city}</h4>
          <div className="temperature">
            {weatherData[0].temp}<sup>°C</sup>
          </div>
          <div className="forecast">
            {weatherData.slice(0, 7).map((day, index) => (
              <div key={index} className="forecast-day">
                <h6>{new Date(day.datetime).toLocaleDateString("en-US", { weekday: 'long' })}</h6>
                <p>{day.temp}<sup>°C</sup></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div >

  );
};

export default Home;
