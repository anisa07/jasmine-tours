import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Tours from "../components/Tours";
import Container from "react-bootstrap/Container";
import tourData from "../components/ToursData";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Main />
        <div>
          <h2 className="text-center m-5">Популярные туры</h2>
          {tourData.map((tour, index) => (
            <Tours key={index} tour={tour} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
