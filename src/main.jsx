import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import TemperatureConverter from "./pages/TemperatureConverter.jsx";
import EnergyConverter from "./pages/EnergyConverter.jsx";
import FrequencyConverter from "./pages/FrequencyConverter.jsx";
import PasswordGenerator from "./pages/PasswordGenerator.jsx";
import CurrencyConverter from "./pages/CurrrencyConverter.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route
            path="/temperature-converter"
            element={<TemperatureConverter />}
          />
          <Route path="/energy-converter" element={<EnergyConverter />} />
          <Route path="/frequency-converter" element={<FrequencyConverter />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
