import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="me-3">
          Jasmine Tours&Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Use ms-auto class to push links to the right */}
            <Nav.Link href="/excursions">Экскурсии</Nav.Link>
            <Nav.Link href="/reviews">Отзывы</Nav.Link>
            <NavDropdown title="Связаться" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://wa.me/c/31642221525">
                <i class="fa-brands fa-whatsapp fa-beat icon-margin"></i>
                Whats App
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/jasmine.tours.amsterdam/">
                <i class="fa-brands fa-instagram fa-beat icon-margin"></i>
                Instagram
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
