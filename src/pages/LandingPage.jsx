// lash-app/src/pages/LandingPage.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <div style={styles.heroSection}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>Welcome to Lash Services on the Go</h1>
          <p style={styles.heroSubtitle}>
            Get professional lash extensions delivered right to your door.
          </p>
          <Link to="/book" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.bookNowButton}
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <section style={styles.infoSection} id="services">
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
        <div style={styles.imagePlaceholder}>
          <img
            src="https://images.unsplash.com/photo-1535310172250-0dcb6b63324e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lash styles example"
            style={styles.image}
          />
        </div>
      </section>

      <section style={styles.infoSection} id="contact">
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
        <div style={styles.imagePlaceholder}>
          <img
            src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact us"
            style={styles.image}
          />
        </div>
        <form style={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.formInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={styles.formInput}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            style={styles.formTextarea}
          />
          <button type="submit" style={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
  heroSection: {
    height: "100vh",
    background: "linear-gradient(to right, #ffe9e9, #ffe3f7)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 5%",
  },
  heroTitle: {
    fontSize: "8vw", // Scales with viewport width
    margin: "0 0 10px 0",
  },
  heroSubtitle: {
    fontSize: "4vw",
    marginBottom: "20px",
  },
  bookNowButton: {
    background: "#FF99CC",
    color: "#fff",
    padding: "15px 25px",
    borderRadius: "30px",
    border: "none",
    fontSize: "4vw",
    fontWeight: 600,
    cursor: "pointer",
  },
  infoSection: {
    padding: "10% 5%",
    textAlign: "center",
  },
  imagePlaceholder: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  contactForm: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  formInput: {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  formTextarea: {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  submitButton: {
    background: "#FF99CC",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LandingPage;