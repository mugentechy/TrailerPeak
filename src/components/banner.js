import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import requests from '../utils/requests';
import '../assets/banner.css';
import { FaStar } from "react-icons/fa";

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const [movies, setMovies] = useState([]);


console.log(movies)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.upcoming.url);
      setMovies(request.data.results.slice(0, 5)); // Take first 5 movies
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="banner-carousel"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <header
            className='banner'
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
              backgroundPosition: 'center center',
            }}
          >
            <div className='banner_contents'>
              <h1 className='banner_title'>{movie?.title || movie?.original_name}</h1>
              <div className='banner_buttons'>
                <div className='banner_button'>{movie?.release_date}</div>
                <div className='banner_button'>{movie?.vote_average} <FaStar/></div>
              </div>
              <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner--fadeBottom' />
          </header>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
