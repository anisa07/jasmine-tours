import React from "react";
import Home from "../routes/Home";
import Excursions from "../routes/Excursions";
import Reviews from "../routes/Reviews";
import Events from "../routes/Events";
import Dental from "../routes/DentalCopy";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/events" element={<Events />} />
        <Route path="/dental" element={<Dental />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
