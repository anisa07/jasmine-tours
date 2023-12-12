import React, { useState } from "react";
import Cards from "../components/Cards";
import Container from "react-bootstrap/Container";
import data from "../components/CardsData";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const Excursions = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleCards = showMore ? data.length : 6;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition }}
    >
      <Container>
        <div className="d-flex flex-column align-items-center mt-5">
          <h1 className="m-5">Мои Экскурсии</h1>
          <p className="mb-5" style={{ fontSize: "1.1em" }}>
            Путешествие по Нидерландам — это возможность увидеть многообразие
            этой страны: от захватывающих городов до живописных деревень, от
            богатой истории до современной культуры. Мы пройдемся по улочкам
            старинных городов, вдохновимся искусством в музеях и насладимся
            красотой природы в удивительных местах. Неважно, увлекаетесь ли
            историей, архитектурой, природой или гастрономией, в этом
            путешествии каждый найдет что-то особенное для себя.
          </p>
        </div>
        <div className="row justify-content-around">
          {data.slice(0, visibleCards).map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, translateY: -50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Cards
                title={card.title}
                text={card.text}
                images={card.images}
                additionalInfo={card.additionalInfo}
              />
            </motion.div>
          ))}
        </div>
        {!showMore && (
          <div className="text-center mb-5">
            <button className="btn btn-primary mt-3" onClick={toggleShowMore}>
              Показать еще
            </button>
          </div>
        )}
      </Container>
    </motion.div>
  );
};

export default Excursions;
