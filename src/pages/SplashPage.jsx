// lash-app/src/pages/SplashPage.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // After 4 seconds, navigate to landing page
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatePresence>
      <motion.div
        style={styles.container}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.img
          src="/perfected.png" // Make sure you place a 'logo.png' in your public folder
          alt="Lash Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          style={styles.logo}
        />
      </motion.div>
    </AnimatePresence>
  );
};

const styles = {
  container: {
    background: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "150px",
    height: "auto",
  },
};

export default SplashPage;
