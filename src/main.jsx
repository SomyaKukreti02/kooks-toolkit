import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Temperature from "./pages/TemperatureConverter.jsx";
import Energy from "./pages/EnergyConverter.jsx";
import Frequency from "./pages/FrequencyConverter.jsx";
import PasswordGenerator from "./pages/PasswordGenerator.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/temperature-converter" element={<Temperature />} />
          <Route path="/energy-converter" element={<Energy />} />
          <Route path="/frequency-converter" element={<Frequency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
