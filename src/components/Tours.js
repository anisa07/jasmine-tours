import React from "react";
import "./Tours.css";

const Tours = ({ tour }) => {
  const { description, images } = tour;
  return (
    <div className="tours">
      <div className="tour-container">
        <div className="tour-text">
          <h3>{description.heading}</h3>
          <p>{description.text}</p>
        </div>
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} alt={`tour${index}`} src={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
