import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PeopleContext } from "../context/PeopleContext";
import Modal from 'react-modal';
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('title');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { isLoggedIn } = useContext(PeopleContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    let sortedMovies = [...movies];

    if (sortCriteria === 'rating') {
      sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    } else {
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    const filtered = sortedMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredMovies(filtered);
  }, [movies, searchQuery, sortCriteria]);

  const handleFavoriteToggle = (movieId) => {
    const updatedFavorites = favorites.includes(movieId)
      ? favorites.filter(id => id !== movieId)
      : [...favorites, movieId];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-list">
      <h1>Popular Movies</h1>
      <div className="search-sort-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="rating">Sort by Rating</option>
        </select>
        <button onClick={() => navigate('/favorites')}>View Favorites</button>
      </div>
      {filteredMovies.length === 0 ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => openModal(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <h4>Rating: {movie.vote_average}</h4>
              <p>{movie.overview}</p>
              <button
                className={`favorite-button ${favorites.includes(movie.id) ? 'favorited' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavoriteToggle(movie.id);
                }}
              >
                {favorites.includes(movie.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      <Modal isOpen={!!selectedMovie} onRequestClose={closeModal}>
        {selectedMovie && (
          <div className="modal-content">
            <h2>{selectedMovie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <p>{selectedMovie.overview}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MovieList;
