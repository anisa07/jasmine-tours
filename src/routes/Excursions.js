import React from "react";
import Cards from "../components/Cards";
import Container from "react-bootstrap/Container";
import data from "../components/CardsData";

const Excursions = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center mt-5">
        <h1 className="mb-4">Мои Экскурсии</h1>
        <p>
          Путешествие по Нидерландам — это возможность увидеть многообразие этой
          страны: от захватывающих городов до живописных деревень, от богатой
          истории до современной культуры. Мы пройдемся по улочкам старинных
          городов, вдохновимся искусством в музеях и насладимся красотой природы
          в удивительных местах. Неважно, увлекаетесь ли историей, архитектурой,
          природой или гастрономией, в этом путешествии каждый найдет что-то
          особенное для себя.
        </p>
      </div>
      <div className="row justify-content-around">
        {data.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <Cards
              title={card.title}
              text={card.text}
              images={card.images}
              additionalInfo={card.additionalInfo}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Excursions;
