import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import '../assets/row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow, type }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request?.data?.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}/${type || ' '}/${movie.name || movie.title}`);
  };

  return (
<div className='row_posters'>
  {movies?.map((movie) => (
    <div
      key={movie.id}
      className={`row_poster_container ${isLargeRow && 'row_posterLarge'}`}
      onClick={() => handleClick(movie)}
    >
      <img
        className='row_poster'
        src={`${base_url}${movie.poster_path}`}
        alt={movie.name || movie.title}
      />
      <div className='row_poster_overlay'>
        <h3>{movie.name || movie.title}</h3>
        <p>{movie.release_date}</p>
        <p className="rating">{movie.vote_average}</p>
        <p>
          {movie.overview.length > 100 
            ? movie.overview.substring(0, 100) + "..." 
            : movie.overview}
        </p>
      </div>
    </div>
  ))}
</div>

  );
};

export default Row;