import React from "react";
import { useState, useEffect } from "react";
import "../Weather.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import weather from "../Weather/WeatherAssets/weather-logo-01.png";
import icon from "../Weather/WeatherAssets/sun.png";
import axios from "axios";
import backgroundImage from "../Weather/WeatherAssets/backgroundImage.jpg";
import Clock from "react-live-clock";

function WeatherApp() {
  const [eastLondonWeatherTemp, setEastLondonWeatherTemp] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: -33.918861,
            lon: 18.4233,
            appid: "b6fc0bd15387ff97a3e8a72d4b84d189",
            units: "metric",
          },
        }
      );
      // Convert temperature from Kelvin to Celsius and round to nearest whole number
      const temperatureCelsius = Math.round(response.data.main.temp);
      const tempHigh = Math.round(response.data.main.temp_max);
      const tempLow = Math.round(response.data.main.temp_min);
      // Convert wind speed from mph to km/h
      const windMph = response.data.wind.speed;
      const windKph = Math.round(windMph * 1.60934);

      // Convert rain from inches to millimeters
      const rainInches = response.data.rain ? response.data.rain["1h"] : 0;
      const rainMm = Math.round(rainInches * 25.4);

      setEastLondonWeatherTemp({
        ...response.data,
        main: {
          ...response.data.main,
          temp: temperatureCelsius,
          temp_max: tempHigh,
          temp_min: tempLow,
        },
        wind: windKph,
        rain: rainMm,
      });
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const day = currentDate.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundPosition: "center", // Adjust the background position as needed
    width: "100%",
    height: "100vh", // Set the desired height
    display: "flex",
  };

  return (
    <body className="body">
      <div className="flex-item-weather-body" style={divStyle}>
        <div className="flex-item-weather-header">
          <div className="flex-logo-div">
            <img
              alt="weather-man-logo"
              src={weather}
              className="weather-man-logo"
            />
          </div>

          <div className="flex-item-time-date">
            <div className="time-date-div">
              <h2 className="clock-heading">
                <Clock
                  format={"HH:mm:ss"}
                  ticking={true}
                  timezone={"Africa/Johannesburg"}
                />
              </h2>
              <div>
                <h6 className="date-heading">{formattedDate}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="Div1">
          <div className="cityHeading">
            <h2>East London</h2>
          </div>
          <div className="flex-item-temp">
            <div className="temp-div">
              <div className="icon-div">
                <img alt="sun-icon" src={icon} className="sun-icon" />
              </div>
              {eastLondonWeatherTemp ? (
                <h1 className="tempreture">
                  {eastLondonWeatherTemp.main.temp}&deg;C
                </h1>
              ) : (
                <p>Loading weather data...</p>
              )}
            </div>

            <div className="details-main-div">
              <div className="details-div">
                <h6> High</h6>
                {eastLondonWeatherTemp ? (
                  <h4>{eastLondonWeatherTemp.main.temp_max}&deg;C</h4>
                ) : (
                  <p>Loading weather data...</p>
                )}
              </div>

              <div className="details-div">
                <h6> Low</h6>
                {eastLondonWeatherTemp ? (
                  <h4>{eastLondonWeatherTemp.main.temp_min}&deg;C</h4>
                ) : (
                  <p>Loading weather data...</p>
                )}
              </div>

              <div className="details-div">
                <h6> Rain</h6>
                {eastLondonWeatherTemp ? (
                  <h4>{eastLondonWeatherTemp.rain}mm</h4>
                ) : (
                  <p>Loading weather data...</p>
                )}
              </div>

              <div className="details-div">
                <h6> Wind</h6>
                {eastLondonWeatherTemp ? (
                  <h4>{eastLondonWeatherTemp.wind}km/h</h4>
                ) : (
                  <p>Loading weather data...</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-button-div">
          <Button className="project-weather-Buttons">
            <Link className="linkButtonText" to="/landing-page">
              Back
            </Link>
          </Button>
        </div>
      </div>
    </body>
  );
}

export default WeatherApp;
