import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ChooseSeatPage from "./pages/ChooseSeatPage.jsx";
import { PaymentPage } from "./pages/PaymentPage.jsx";

import "./App.css";
//import "../src/assets/bootstrap/bootstrap.min.css";
//import "../src/assets/bootstrap/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ChooseSeatPage" element={<ChooseSeatPage />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
