import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/row.css';

const base_url = 'https://image.tmdb.org/t/p/w200/';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results = [], query, type } = location.state || {};

  // Handle movie selection (navigate to details page)
  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}/${type}/${movie.name || movie.title}`);
  };

  return (
    <div className="search_results">
      <h2 className="search_title">Search Results for "{query}"</h2>

      <div className="grid_container">
        {results?.map((movie) => (
          <div
            key={movie.id}
            className="grid_item"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              className="grid_poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name || movie.title}
            />
            <div className="grid_overlay">
              <h3>{movie.name || movie.title}</h3>
              <p>{movie.release_date}</p>
              <p className="rating">{movie.vote_average}</p>
              <p>
                {movie.overview.length > 100
                  ? movie.overview.substring(0, 100) + '...'
                  : movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;