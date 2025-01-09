// lash-app/src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Lash Business. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    background: "#fff",
    padding: "20px",
    position: "relative", // Remove fixed positioning for better Flexbox compatibility
    width: "100%",
    boxShadow: "0 -1px 3px rgba(0,0,0,0.1)",
  },
};

export default Footer;