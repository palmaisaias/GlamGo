// lash-app/src/pages/BookNow.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const technicians = [
  {
    id: 1,
    name: "Sarah",
    bio: "Certified lash tech with 3 years of experience.",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMkMlMjB5b3VuZyUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Alexa",
    bio: "Professional in lashes for 5+ years.",
    photoUrl:
      "https://images.unsplash.com/photo-1527565290982-018bcfdbee74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTJMIJTIweW91bmclMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Michelle",
    bio: "Passionate about beauty.",
    photoUrl:
      "https://images.unsplash.com/photo-1533044776621-3fcc98a59622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvbWFuJTJMIJTIweW91bmclMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
  },
];

const BookNow = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container
        className="flex-grow-1 text-center mt-5"
        style={{ paddingTop: "45px" }} // Adjust the padding value as needed
      >
        <h1 className="fw-bold fs-2 fs-md-1">Choose Your Lash Technician</h1>
        <Row className="mt-4">
          {technicians.map((tech) => (
            <Col xs={12} sm={6} md={4} className="mb-4" key={tech.id}>
              <Card className="shadow border-0 h-100">
                <Card.Img
                  variant="top"
                  src={tech.photoUrl}
                  alt={tech.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold fs-4">{tech.name}</Card.Title>
                  <Card.Text className="text-muted">{tech.bio}</Card.Text>
                  <Link to={`/technician/${tech.id}`}>
                    <Button variant="primary" className="rounded-pill fs-6">
                      Select
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default BookNow;
