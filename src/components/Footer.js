import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col sm={6}>
            <h5>Company Name</h5>
            <p>About us</p>
            <p>Contact us</p>
          </Col>
          <Col sm={6}>
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Services</p>
            <p>Products</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
