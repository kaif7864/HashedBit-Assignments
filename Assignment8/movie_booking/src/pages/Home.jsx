import React from "react";
import { Link } from "react-router-dom";
import movies from "../Movies";
import "../Styles.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
