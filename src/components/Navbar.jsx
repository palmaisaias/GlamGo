// src/components/Navbar.jsx

import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const BootstrapNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/landing" className="fw-bold fs-1 fs-md-2 fs-lg-3 fs-xl-4">
          GlamGo
        </Navbar.Brand>

        {/* Hamburger Icon for Collapsible Menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation Links */}
            <Nav.Link as={Link} to="/landing" className="fw-semibold fs-6 fs-md-5 fs-lg-4 fs-xl-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/book" className="fw-semibold fs-6 fs-md-5 fs-lg-4 fs-xl-3">
              Book Now
            </Nav.Link>
            <Nav.Link href="#services" className="fw-semibold fs-6 fs-md-5 fs-lg-4 fs-xl-3">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-semibold fs-6 fs-md-5 fs-lg-4 fs-xl-3">
              Contact
            </Nav.Link>

            {/* Dropdown Menu */}
            <NavDropdown
              title="More"
              id="nav-dropdown"
              className="fw-semibold fs-6 fs-md-5 fs-lg-4 fs-xl-3"
            >
              <NavDropdown.Item href="#about" className="fs-6 fs-md-5 fs-lg-4 fs-xl-3">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#faq" className="fs-6 fs-md-5 fs-lg-4 fs-xl-3">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#feedback" className="fs-6 fs-md-5 fs-lg-4 fs-xl-3">
                Feedback
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;