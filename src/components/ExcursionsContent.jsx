import { useState } from "react";
import Cards from "./Cards.jsx";
import { Container } from "react-bootstrap";
import data from "../data/CardsData.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import "./excursions.css";

const ExcursionsContent = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleCards = showMore ? data.length : 3;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container className="excursions-container">
      <div className="excursions-header">
        <h1 className="excursions-title">Мои Экскурсии</h1>
        <p className="excursions-description">
          Путешествие по Нидерландам — это возможность увидеть многообразие
          этой страны: от захватывающих городов до живописных деревень, от
          богатой истории до современной культуры. Мы пройдемся по улочкам
          старинных городов, вдохновимся искусством в музеях и насладимся
          красотой природы в удивительных местах. Неважно, увлекаетесь ли
          историей, архитектурой, природой или гастрономией, в этом
          путешествии каждый найдет что-то особенное для себя.
        </p>
      </div>
      <div className="row justify-content-center g-4">
        {data.slice(0, visibleCards).map((card, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12"
          >
            <Cards
              title={card.title}
              text={card.text}
              images={card.images}
              additionalInfo={card.additionalInfo}
            />
          </div>
        ))}
      </div>
      {!showMore && data.length > 3 && (
        <div className="text-center mt-5 mb-4">
          <button className="btn arrow-btn" onClick={toggleShowMore}>
            <FontAwesomeIcon
              icon={faArrowCircleDown}
              size="3x"
              style={{ color: "#4c3254" }}
            />
          </button>
        </div>
      )}
    </Container>
  );
};

export default ExcursionsContent;

