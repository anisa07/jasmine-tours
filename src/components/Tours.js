import React from "react";
import "./Tours.css";
import tour1 from "../assets/tour1.jpeg";
import tour2 from "../assets/tour2.jpeg";
import tour3 from "../assets/tour3.jpeg";
import tour4 from "../assets/tour4.jpeg";
import tour5 from "../assets/tour5.jpeg";
import tour6 from "../assets/tour6.jpeg";

const Tours = () => {
  return (
    <div className="tours">
      <h1>Популярные туры</h1>
      <p>Lorem ipsum</p>

      <div className="first-tour">
        <div className="tour-text">
          <h2>Tour heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis distinctio eum cupiditate dolores officia. Obcaecati
            molestias ut tempore saepe in atque, magnam, quae, voluptatum
            asperiores enim commodi expedita. Itaque delectus error deleniti,
            saepe neque quisquam voluptates nisi similique, officia ullam
            aliquam doloremque excepturi. Ea adipisci impedit repudiandae
            veritatis neque provident?
          </p>
        </div>
        <div
          className="image
        "
        >
          <img alt="tour1" src={tour1} />
          <img alt="tour1" src={tour2} />
        </div>
      </div>
    </div>
  );
};

export default Tours;
