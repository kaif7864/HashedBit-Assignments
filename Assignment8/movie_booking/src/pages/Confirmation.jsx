import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state || {};

  if (!bookingId)
    return (
      <h2 style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
        No Booking Found
      </h2>
    );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.confirmationBox}>
        <h1 style={styles.title}>🎉 Booking Confirmed!</h1>
        <p style={styles.bookingId}>
          <strong>Booking ID:</strong> {bookingId}
        </p>
        <p style={styles.text}>
          <strong>Name:</strong> {name}
        </p>
        <p style={styles.text}>
          <strong>Email:</strong> {email}
        </p>
        <p style={styles.text}>
          <strong>Mobile:</strong> {mobile}
        </p>
      </div>
    </div>
  );
};

const styles = {
  
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw", // ✅ Ensure it covers full width
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
  },
  confirmationBox: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  bookingId: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "8px",
  },
};

export default Confirmation;
