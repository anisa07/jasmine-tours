import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import "./Cards.css";

const Cards = ({ title, text, images, additionalInfo }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleExpanded = () => {
    setShowOverlay(!showOverlay);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <Card
        className={`text-left mb-5 ${showOverlay ? "expanded" : ""}`}
        style={{ height: "fit-content" }}
      >
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index} className="">
              <img
                className="d-block w-auto mx-auto"
                src={image}
                alt={`Slide ${index}`}
                style={{ objectFit: "cover", height: "350px", width: "600px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="text-center">{title}</Card.Title>
          <ul>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <motion.div className="d-flex justify-content-center w-100 text-center">
            <Button
              as={motion.button}
              variants={{
                hover: {
                  scale: 1.1,
                  transition: { duration: 0.3 },
                },
                initial: { scale: 1 },
              }}
              initial="initial"
              whileHover="hover"
              variant="primary"
              className="w-80 custom-button"
              onClick={toggleExpanded}
            >
              Подробнее
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
      <Modal show={showOverlay} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Card.Text>{additionalInfo}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="custom-button"
            variant="secondary"
            onClick={handleClose}
          >
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cards;
