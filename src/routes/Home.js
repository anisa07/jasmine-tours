import React from "react";
import Hero1 from "../components/Hero1";
import Main from "../components/Main";
import Tours from "../components/Tours";
import ToursData from "../components/ToursData.js";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition }}
    >
      <Hero1 />

      <Main />
      <div>
        <h2 className="text-center m-5">Популярные туры</h2>
        {ToursData.map((tour, index) => (
          <Tours key={index} tour={tour} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
