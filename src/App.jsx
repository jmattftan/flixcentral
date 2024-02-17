import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import BuyTicketPage from "./pages/BuyTicketPage.jsx";
import MovieTicketReceipt from "./pages/MovieTicketReceipt.jsx";
import "./App.css";
//import "../src/assets/bootstrap/bootstrap.min.css";
//import "../src/assets/bootstrap/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/BuyTicketPage" element={<BuyTicketPage />} />
        <Route path="/MovieTicketReceipt" element={<MovieTicketReceipt />} />
      </Routes>
    </Router>
  );
}

export default App;
