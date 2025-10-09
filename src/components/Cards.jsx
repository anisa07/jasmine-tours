import { useState } from "react";
import { Button, Card, Modal, Carousel } from "react-bootstrap";
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
      <Card className={`text-left ${showOverlay ? "expanded" : ""}`}>
        <div className="card-image-container">
          <Carousel indicators={true} controls={true} interval={null}>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Слайд ${index + 1}`}
                  loading="lazy"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center mb-3">{title}</Card.Title>
          <ul className="flex-grow-1">
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <motion.div className="d-flex justify-content-center mt-3">
            <Button
              as={motion.button}
              variants={{
                hover: {
                  scale: 1.05,
                  transition: { duration: 0.2 },
                },
                initial: { scale: 1 },
              }}
              initial="initial"
              whileHover="hover"
              className="custom-button"
              onClick={toggleExpanded}
            >
              Подробнее
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
      <Modal show={showOverlay} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <div>{additionalInfo}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="custom-button"
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

