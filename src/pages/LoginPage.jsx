// lash-app/src/pages/LoginPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <Container fluid className="login-page d-flex align-items-center justify-content-center">
      <Row className="login-container shadow-lg">
        {/* Left Side - Logo */}
        <Col md={6} className="login-left d-flex flex-column justify-content-center align-items-center p-4">
          <Image
            src="/download4.png"
            alt="GlamGo Logo"
            className="logo mb-4"
          />
          <h2 className="fw-bold text-center">Welcome to GlamGo</h2>
          <p className="text-muted text-center">Your journey to flawless lashes starts here.</p>
        </Col>

        {/* Right Side - Login Options */}
        <Col md={6} className="login-right p-4">
          <h3 className="fw-bold mb-4 text-center">Log In or Sign Up</h3>
          <Form>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Log In
            </Button>
          </Form>
          <div className="text-center text-muted mb-3">or</div>
          <Button variant="outline-primary" className="w-100 mb-3">
            Sign Up
          </Button>
          <Button variant="outline-secondary" className="w-100">
            Book as a Guest
          </Button>
          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-primary">
              Forgot Password?
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;