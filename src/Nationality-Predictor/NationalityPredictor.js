// Sources referenced
// https://www.youtube.com/watch?v=je3FTTunyp4

import React, { useState } from "react";
import "../NationailtyPredictor.css";
import np from "../Nationality-Predictor/PredictorAssests/np-01.png";
import axios from "axios";
import { Button } from "react-bootstrap";
import logo from "../Landing Page/LandingPageAssets/ldevelops1.png";
import { Link } from "react-router-dom";

export default function MyForm() {
  // function NationailtyPredictor() {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  // }
  const [predictedNationality, setPredictedNationality] = useState(null);
  const [name, setName] = useState("");

  const fetchData = () => {
    axios.get(`https://api.nationalize.io/?name=${name}`).then((res) => {
      setPredictedNationality(res.data.country[0].country_id);
    });
  };

  return (
    <div className="div1">
      <div className="flex-item-header">
        <div class="flex-item-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="inputArea">
        <div className="flex-item-png">
          <img src={np} className="background" alt="background" />
        </div>
        <div className="flex-item-paragraph">
          <p>
            The "Nationality Predictor" app is a web application built using
            ReactJS that allows users to predict the likely nationality of a
            person based on their name. The app's interface is designed with a
            visually appealing layout, featuring a background image and a
            prominent logo. It provides an interactive input area where users
            can type a name and a "Search" button to trigger the prediction
            process.
          </p>
        </div>
        <div className="flex-item-main-div">
          <div className="labelDiv">
            <label>
              <input
                placeholder="Enter Your Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="input"
                name="myInput"
              />
            </label>
          </div>

          <div className="buttonDiv">
            <button onClick={fetchData} className="searchButton">
              Search
            </button>
          </div>
          <div className="results">
            <h1>Country Code: {predictedNationality} </h1>
          </div>
        </div>
        <div className="flex-item-download">
          <Button className="d-button">
            <Link className="linkText" to="/landing-page">
              Back to portfoilio
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex-item-footer">
        <div className="footerInfo">
          <p>
            Designed in <strong>Figma</strong> & coded in{" "}
            <strong>Visual Studio Code</strong> by Me. Built with{" "}
            <strong>ReactJS</strong> & <strong>CSS</strong>.
          </p>
        </div>

        <div>
          <p>Copyright &copy; 2023</p>
        </div>
      </div>
    </div>
  );
}
