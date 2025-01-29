import React, { useState, useEffect, useCallback } from 'react';
import axios from '../utils/axios';
import ModalDialog from './ModalDialog';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow, type }) => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [view, setView] = useState(null);
  const [crew, setCrew] = useState([]);

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

  const handleClick = useCallback((movie) => {
    setView(movie);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>

      <ModalDialog
        open={open}
        handleClose={handleClose}
        view={view}
        crew={crew}
        type={type}
      />
    </div>
  );
};

export default React.memo(Row);
