import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Hero1.css";
import flower3 from "../assets/flower3.jpg";
import image5 from "../assets/image5.jpg";
import image4 from "../assets/image4.jpg";

function Hero1() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="overlay">
          <img
            src={flower3.src || flower3}
            alt="Амстердам цветы"
            className="d-block w-100"
          />
        </div>

        <Carousel.Caption>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
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
            src={image5.src || image5}
            alt="Путешествие по Амстердаму"
            className="d-block w-100 "
          />
        </div>

        <Carousel.Caption>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
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
            src={image4.src || image4}
            alt="Откройте Амстердам"
            className="d-block w-100 "
          />
        </div>

        <Carousel.Caption>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
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

export default Hero1;

