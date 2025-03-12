import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate("/confirmation", { state: { ...formData, bookingId } });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Book Your Seat</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="name" placeholder="Enter your name" required onChange={handleChange} style={styles.input} />
          <input type="email" name="email" placeholder="Enter your email" required onChange={handleChange} style={styles.input} />
          <input type="tel" name="mobile" placeholder="Enter your mobile number" required onChange={handleChange} style={styles.input} />
          <button type="submit" style={styles.button}>Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center", // ✅ Center horizontally
    alignItems: "center", // ✅ Center vertically
    minHeight: "100vh",
    width: "100vw", // ✅ Ensure full width of viewport
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
  },
  formContainer: {
    textAlign: "center",
    padding: "25px",
    width: "100%",
    maxWidth: "400px",
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "12px",
    boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
    transition: "border 0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#ff5722",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
};

export default BookingForm;
