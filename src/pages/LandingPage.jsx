// lash-app/src/pages/LandingPage.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="wrapper">
      {/* Use Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <Container fluid className="heroSection text-center bg-light py-5">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold mb-3 hero-tit">
            Welcome to <span className="glamgo">GlamGo</span>
          </h1>
          <p className="lead mb-4 hero-titty">
            Get professional lash extensions delivered right to your door.
          </p>
          <Link to="/book">
            <Button variant="primary" size="lg" className="bookNowButton">
              Book Now
            </Button>
          </Link>
        </motion.div>
      </Container>

      {/* Services Section */}
      <Container id="services" className="py-5">
        <Row className="text-center mb-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="fw-bold"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Explore a range of professional lash styles tailored to suit your
            needs. Get the perfect look delivered straight to your home.
          </motion.p>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1535310172250-0dcb6b63324e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lash styles example"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container id="contact" className="py-5 bg-light">
        <Row className="text-center mb-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="fw-bold"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Ready to glam up your lashes? We’re just a booking away. Reach out to us below.
          </motion.p>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;