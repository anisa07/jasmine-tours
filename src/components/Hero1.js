import Carousel from "react-bootstrap/Carousel";
import "./Hero1.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="overlay">
          <img
            style={{ height: "90vh" }}
            src="https://images.pexels.com/photos/5225282/pexels-photo-5225282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image1"
            className="d-block w-100 "
          />
        </div>

        <Carousel.Caption>
          <h1>
            Личный Гид по Амстердаму: Ваше уникальное путешествие начинается
            здесь.
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay">
          <img
            style={{ height: "90vh" }}
            src="https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image2"
            className="d-block w-100 "
          />
        </div>

        <Carousel.Caption>
          <h1>Уникальный старт для вашего приключения</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay">
          <img
            style={{ height: "90vh" }}
            src="https://images.pexels.com/photos/2901483/pexels-photo-2901483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image2"
            className="d-block w-100"
          />
        </div>

        <Carousel.Caption>
          <h1>Откройте новые грани путешествия</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
