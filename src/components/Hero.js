import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/5225282/pexels-photo-5225282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image1"
            className="d-block w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image2"
            className="d-block w-100"
          />
        </Carousel.Item>
      </Carousel>
      <Carousel.Caption className="carousel-caption-content">
        <div className="carousel-caption-bg">
          <h3>
            Личный Гид по Амстердаму: Ваше уникальное путешествие начинается
            здесь.
          </h3>
          <p>
            Откройте с нами тайны этого удивительного города, узнайте его
            историю, наслаждайтесь культурой и гастрономическими изысками.
            Давайте вместе создадим историю вашего путешествия в Амстердаме.
          </p>
        </div>
      </Carousel.Caption>
    </Container>
  );
}

export default ControlledCarousel;
