// lash-app/src/pages/LandingPage.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="heroSection">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="heroTitle">Welcome to Lash Services on the Go</h1>
          <p className="heroSubtitle">
            Get professional lash extensions delivered right to your door.
          </p>
          <Link to="/book" className="link">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bookNowButton"
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <section className="infoSection" id="services">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
        <div className="imagePlaceholder">
          <img
            src="https://images.unsplash.com/photo-1535310172250-0dcb6b63324e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lash styles example"
            className="image"
          />
        </div>
      </section>

      <section className="infoSection" id="contact">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Ready to glam up your lashes? We’re just a booking away. Reach out to
          us below.
        </motion.p>
        <div className="imagePlaceholder">
          <img
            src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact us"
            className="image"
          />
        </div>
        <form className="contactForm">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="formInput"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="formInput"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="formTextarea"
          />
          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;