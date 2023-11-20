import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

const Cards = ({ title, text, images, additionalInfo }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleExpanded = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
    setShowOverlay(!showOverlay);
  };

  const handleClose = () => {
    setShowAdditionalInfo(false);
    setShowOverlay(false);
  };

  return (
    <>
      <Card
        className={`text-left mb-5 ${showAdditionalInfo ? "expanded" : ""}`}
      >
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index}`}
                style={{ objectFit: "cover", height: "400px", width: "600px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="text-center">{title}</Card.Title>
          {showAdditionalInfo ? (
            <Card.Text>{additionalInfo}</Card.Text>
          ) : (
            <ul>
              {text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="d-flex justify-content-center w-100"
          >
            <div className="text-center">
              <Button
                variant="primary"
                className="w-80"
                onClick={toggleExpanded}
              >
                {showAdditionalInfo ? "Скрыть" : "Подробнее"}
              </Button>
            </div>
          </motion.div>
        </Card.Body>
      </Card>
      <Modal show={showOverlay} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Card.Text>{additionalInfo}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cards;
