import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const testimonialData = [
  {
    id: 1,
    imgSrc: "https://i.ibb.co/d5DY64w/img1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
    name: "Jennifer Smith",
    role: "Office Worker",
  },
  {
    id: 1,
    imgSrc: "https://i.ibb.co/d5DY64w/img1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
    name: "Jennifer Smith",
    role: "Office Worker",
  },
  {
    id: 1,
    imgSrc: "https://i.ibb.co/d5DY64w/img1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
    name: "Jennifer Smith",
    role: "Office Worker",
  },
  // Add more testimonial objects as needed
];

const Testimonials = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="col-center m-auto">
          <h2
            style={{
              color: "#333",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
              position: "relative",
              margin: "30px 0 60px",
            }}
          >
            Testimonials
            <span
              style={{
                content: "",
                width: "140px",
                position: "absolute",
                margin: "0 auto",
                height: "3px",
                background: "#db584e",
                left: 0,
                right: 0,
                bottom: "-10px",
                opacity: ".8",
              }}
            ></span>
          </h2>
          <Carousel
            id="myCarousel"
            interval={null}
            prevIcon={<BsChevronLeft />}
            nextIcon={<BsChevronRight />}
            className="carousel"
          >
            {testimonialData.map((testimonial) => (
              <Carousel.Item
                key={testimonial.id}
                className="carousel-item"
                style={{
                  color: "#999",
                  fontSize: "14px",
                  textAlign: "center",
                  overflow: "hidden",
                  minHeight: "290px",
                }}
              >
                <div
                  className="img-box"
                  style={{
                    width: "135px",
                    height: "135px",
                    margin: "0 auto",
                    padding: "5px",
                    border: "1px solid #ddd",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={testimonial.imgSrc}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <p className="testimonial" style={{ padding: "30px 0 10px" }}>
                  {testimonial.text}
                </p>
                <p className="overview" style={{ fontStyle: "italic" }}>
                  <b>{testimonial.name}</b>, {testimonial.role}
                </p>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
