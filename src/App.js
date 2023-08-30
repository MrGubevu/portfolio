import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Landing Page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NationalityPredictor from "./Nationality-Predictor/NationalityPredictor";
import "../src/LandingPage.css";
import WeatherApp from "./Weather/WeatherApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route
          path="/nationality-predictor"
          element={<NationalityPredictor />}
        />
        <Route path="/weatherApp" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;
