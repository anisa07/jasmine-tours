import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import LogoSvg from "./LogoAnimation";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-custom-bg sticky-top">
      <Container fluid>
        <Navbar.Brand href="/" className="custom-brand">
          <LogoSvg className="logo-animation" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            className="ml-auto align-items-center"
            style={{ lineHeight: "2em" }}
          >
            <Nav.Link
              href="/excursions"
              className="text-decoration-none px-3 py-2 hover-effect custom-nav-link"
            >
              Экскурсии
            </Nav.Link>
            <Nav.Link
              href="/reviews"
              className="text-decoration-none px-3 py-2 hover-effect custom-nav-link"
            >
              Отзывы
            </Nav.Link>
            <NavDropdown
              className="custom-nav-link"
              title="Связаться"
              id="basic-nav-dropdown"
              menuVariant="white"
            >
              <NavDropdown.Item
                href="https://wa.me/c/31642221525"
                className="custom-dropdown-icons"
              >
                <i className="fa-brands fa-whatsapp fa-beat icon-margin m-2" />
                ВП
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/jasmine.tours.amsterdam/"
                className="custom-dropdown-icons"
              >
                <i className="fa-brands fa-instagram fa-beat icon-margin m-2" />
                ИН
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
