import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((movieId) => (
            <FavoriteMovieCard key={movieId} movieId={movieId} />
          ))}
        </div>
      )}
    </div>
  );
};

const FavoriteMovieCard = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d64465f835d027114fd469afd4e2de72`
      );
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className="favorite-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <h4>Rating: {movie.vote_average}</h4>
      <p>{movie.overview}</p>
      <Link to={`/movies/${movie.id}`}>More Details</Link>
    </div>
  );
};

export default FavoritesPage;
