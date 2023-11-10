import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Excursions from "./routes/Excursions";
import Reviews from "./routes/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
