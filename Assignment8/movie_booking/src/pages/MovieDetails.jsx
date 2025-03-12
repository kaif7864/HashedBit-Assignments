import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../Movies";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2 style={{ textAlign: "center", color: "red" }}>Movie Not Found</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} style={styles.image} />
      <p style={styles.description}>{movie.description}</p>
      <Link to={`/book/${movie.id}`} style={styles.button}>Book Seat</Link>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "100px",
    width: "100vw", // ✅ Ensure it covers full width
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
  },
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "600px",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "15px",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#007bff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "0.3s",
  },
};

export default MovieDetails;
