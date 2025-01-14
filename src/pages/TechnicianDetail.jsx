// lash-app/src/pages/TechnicianDetail.jsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sampleSchedules = {
  1: ["Jan 10 - 10:00 AM", "Jan 10 - 2:00 PM", "Jan 11 - 1:00 PM"],
  2: ["Jan 12 - 9:00 AM", "Jan 13 - 11:00 AM", "Jan 13 - 3:00 PM"],
  3: ["Jan 14 - 10:00 AM", "Jan 14 - 4:00 PM", "Jan 15 - 1:00 PM"],
};

const TechnicianDetail = () => {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookNow = () => {
    if (selectedSlot) {
      setIsBooked(true);
    }
  };

  return (
    <div style={styles.wrapper}>
      <Navbar />
      <main style={styles.container}>
        <h1 className="fw-bold fs-2 fs-md-1">Technician {id} Schedule</h1>
        <h3>Please select an available time slot:</h3>
        <div style={styles.slots}>
          {sampleSchedules[id].map((slot) => (
            <button
              key={slot}
              style={{
                ...styles.slotButton,
                background: selectedSlot === slot ? "#FF99CC" : "#e0e0e0",
                color: selectedSlot === slot ? "#fff" : "#000",
              }}
              onClick={() => handleSlotClick(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
        <button style={styles.bookButton} onClick={handleBookNow}>
          Book Now
        </button>
      </main>

      {/* Celebratory Popup */}
      <AnimatePresence>
        {isBooked && (
          <motion.div
            style={styles.popupOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={styles.popupContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <h2>Yay! You have booked!</h2>
              <p>Your appointment is confirmed for {selectedSlot}.</p>
              <button
                style={styles.closePopup}
                onClick={() => setIsBooked(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Ensures the page takes up the full viewport height
    },
    container: {
      flexGrow: 1, // Allows the content to fill the available space
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centers content horizontally
      justifyContent: "center", // Centers content vertically
      textAlign: "center",
      marginTop: "40px", // You can adjust or remove this if not needed
    },
    slots: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      marginTop: "20px", // Adjust this for spacing between the heading and buttons
    },
    slotButton: {
      padding: "10px 20px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      fontWeight: 500,
    },
    bookButton: {
      marginTop: "20px",
      padding: "10px 20px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      background: "#FF99CC",
      color: "#fff",
      fontWeight: 600,
    },
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
    },
    popupContent: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      textAlign: "center",
    },
    closePopup: {
      marginTop: "20px",
      padding: "10px 20px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      background: "#FF99CC",
      color: "#fff",
      fontWeight: 600,
    },
  };

export default TechnicianDetail;