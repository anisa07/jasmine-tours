import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Feedback.css";

function Feedback({ feedbackData }) {
  return (
    <Container className="client pt-3 pb-5">
      <Row>
        <Col className="mb-5">
          <h1 className="fw-bold text-black text-center mb-5">
            Отзывы обо мне
          </h1>
          <p className="p-text text-black text-left">
            За время моей работы в качестве экскурсовода я провела более 500
            туров: от доступных программ до более роскошных. Моя цель состоит в
            том, чтобы каждый гость унёс с собой только положительные
            впечатления и ощущение желания вернуться в Нидерланды. Это
            вдохновляет меня, когда удается достичь этого!
          </p>
        </Col>
      </Row>
      <Carousel controls={true} className="carousel-dark" interval={null}>
        {feedbackData.map((item, index) => (
          <Carousel.Item key={index} className="mb-5">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src={item.avatar}
              alt={`avatar ${index}`}
              style={{ width: "150px" }}
            />
            <Row className="d-flex justify-content-center">
              <Col lg={8}>
                <h5 className="mb-3">{item.name}</h5>
                <p>{item.tour}</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  {item.feedback}
                </p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Feedback;
