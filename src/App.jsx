// lash-app/src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import LandingPage from "./pages/LandingPage";
import BookNow from "./pages/BookNow";
import TechnicianDetail from "./pages/TechnicianDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      {/* Splash Page at root "/" */}
      <Route path="/" element={<SplashPage />} />
      
      {/* Landing Page after splash */}
      <Route path="/landing" element={<LandingPage />} />
      
      {/* Book Now page listing all technicians */}
      <Route path="/book" element={<BookNow />} />
      
      {/* Technician Detail page to pick date/time */}
      <Route path="/technician/:id" element={<TechnicianDetail />} />
    </Routes>
  );
}

export default App;
