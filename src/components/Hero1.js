import Carousel from "react-bootstrap/Carousel";
import "./Hero1.css";
import { motion } from "framer-motion";
import image1 from "../assets/flower3.jpg";
import image2 from "../assets/image5.jpg";
import image3 from "../assets/image4.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="overlay">
          <img
            src={image1}
            style={{ height: "100vh" }}
            alt="image1"
            className="d-block w-100"
          />
        </div>

        <Carousel.Caption>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 70 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Личный Гид по Амстердаму: Ваше путешествие начинается здесь.
          </motion.h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay">
          <img
            src={image2}
            alt="image2"
            style={{ height: "100vh" }}
            className="d-block w-100 "
          />
        </div>

        <Carousel.Caption>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 70 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Уникальный старт для вашего приключения
          </motion.h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay">
          <img
            style={{ height: "100vh" }}
            src={image3}
            alt="image3"
            className="d-block w-100 "
          />
        </div>

        <Carousel.Caption>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 70 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Откройте новые грани путешествия
          </motion.h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
