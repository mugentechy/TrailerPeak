import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import '../assets/row.css'
import styled from 'styled-components';
const base_url = 'https://image.tmdb.org/t/p/original/'
import { useLocation, useNavigate } from 'react-router-dom';

const Column = ({ title, fetchUrl, isLargeRow,type }) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [movies, setMovies] = useState([])
  const [view, setView] = useState('')
    const [crew, setCrew] = useState([])
    const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}/${type}/${movie.name || movie.title}`);
  };


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request?.data?.results)

      setMovies(request?.data?.results)
      return request
    }
    fetchData()
  }, [fetchUrl])



  return (
    
    <div className='row'>
      
      <div className='margin-top'>
 <div className="grid_container">
        {movies?.map((movie) => (
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
                    ? movie.overview.substring(0, 100) + "..." 
                    : movie.overview}
                </p>
              </div>
            </div>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Column
