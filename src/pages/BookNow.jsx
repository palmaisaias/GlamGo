// lash-app/src/pages/BookNow.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const technicians = [
  {
    id: 1,
    name: "Sarah",
    bio: "Certified lash tech with 3 years of experience.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMkMlMjB5b3VuZyUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Alexa",
    bio: "Professional in lashes for 5+ years.",
    photoUrl: "https://images.unsplash.com/photo-1527565290982-018bcfdbee74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTJDJTIweW91bmclMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Michelle",
    bio: "Passionate about beauty.",
    photoUrl: "https://images.unsplash.com/photo-1533044776621-3fcc98a59622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvbWFuJTJDJTIweW91bmclMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D",
  },
];

const BookNow = () => {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <div style={styles.container}>
        <h1>Choose Your Lash Technician</h1>
        <div style={styles.techList}>
          {technicians.map((tech) => (
            <div key={tech.id} style={styles.techCard}>
              <img
                src={tech.photoUrl}
                alt={tech.name}
                style={styles.techPhoto}
              />
              <h2>{tech.name}</h2>
              <p>{tech.bio}</p>
              <Link to={`/technician/${tech.id}`} style={{ textDecoration: "none" }}>
                <button style={styles.selectButton}>Select</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
    wrapper: {
      display: "flex", // Enables flexbox
      flexDirection: "column", // Stack content vertically
      minHeight: "100vh", // Ensures the wrapper takes the full height of the viewport
      paddingTop: "60px", // Keeps content below the navbar
    },
    container: {
      flex: 1, // Ensures the main content takes up available space
      textAlign: "center",
      marginTop: "40px",
    },
    techList: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "30px",
    },
    techCard: {
      background: "#fff",
      borderRadius: "10px",
      width: "200px",
      padding: "20px",
      marginBottom: "0px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    techPhoto: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    selectButton: {
      marginTop: "10px",
      padding: "10px 20px",
      marginBottom: "20px",
      background: "#FF99CC",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontWeight: 600,
    },
  };

export default BookNow;
