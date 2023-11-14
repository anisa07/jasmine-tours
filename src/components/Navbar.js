import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="/" className="me-3">
          Jasmine Tours
          {/* <img src={logo} style={{ maxWidth: "150px", maxHeight: "50px" }} /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/excursions"
              className="text-white text-decoration-none px-3 py-2 hover-effect"
            >
              Экскурсии
            </Nav.Link>
            <Nav.Link
              href="/reviews"
              className="text-white text-decoration-none px-3 py-2 hover-effect"
            >
              Отзывы
            </Nav.Link>
            <NavDropdown
              title="Связаться"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                href="https://wa.me/c/31642221525"
                className="text-white"
              >
                <i className="fa-brands fa-whatsapp fa-beat icon-margin m-1"></i>
                WhatsApp
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/jasmine.tours.amsterdam/"
                className="text-white"
              >
                <i className="fa-brands fa-instagram fa-beat icon-margin m-1"></i>
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
