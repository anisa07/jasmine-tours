import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Tours from "../components/Tours";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Main />
        <Tours />
      </Container>
    </div>
  );
};

export default Home;
