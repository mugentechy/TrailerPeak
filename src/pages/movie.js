import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchMagnetData } from '../features/magnet/magnetActions';
import ModalDialog from '../components/ModalDialog';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Container, Title, SubTitle, MovieDetails, VideoSection, Sidebar, SimilarMovies, MovieCard, Reactions } from '../assets/feature';

const API_KEY = '64422b19ff6d242b3851b117c783ec08';

export default function Movie() {
  const dispatch = useDispatch();
  const { id, type, name } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const { magnet: magnetData, loading, error } = useSelector((state) => state.magnet);



  useEffect(() => {
    dispatch(fetchMagnetData(name));
  }, [dispatch, name]);


  useEffect(() => {
    async function fetchSimilarMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${API_KEY}`
        );
        setSimilarMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    }

    if (id) {
      fetchSimilarMovies();
    }
  }, [id, type]);




  useEffect(() => {
    async function fetchMovieVideo() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`
        );
        setMovieVideo(response.data.results[0].key);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    }

    if (id) {
      fetchMovieVideo();
    }
  }, [id, type]);



console.log(movieDetails)  


  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    }

    if (id) {
      fetchMovieDetails();
    }
  }, [id, type]);




  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container>
      <MovieDetails>
        {/* Video Section */}
        <VideoSection>
       {loading ? (
        <Skeleton height={390} width="100%" />
      ) : (
        <YouTube videoId={movieVideo} opts={opts} />
      )}

          {/* Reaction Icons */}
          <Reactions>
            <span>👍 41</span>
            <span>❤️ 7</span>
            <span>👏 5</span>
            <span>😂 3</span>
            <span>😲 5</span>
            <span>😢 3</span>
          </Reactions>
        </VideoSection>

        {/* Movie Details Sidebar */}
        <Sidebar>

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
  {/* Image with smaller size */}
  <img
    src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
    alt={movieDetails.title}
    style={{ width: '150px', height: 'auto' }} // Adjust size as needed
  />

 
  <div>
    <Title>{movieDetails.title || movieDetails.name }</Title>


    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '5px' }}>
      {movieDetails?.genres?.map((genre, index) => (
        <span key={genre.id}>
          {genre.name}
          {index < movieDetails.genres.length - 1 && " | "}
        </span>
      ))}
    </div>
  </div>
</div>


  {/* Styled horizontal rule */}
  <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />

 <Title> Official Trailer</Title>
        
          <SubTitle>

            {loading ? <Skeleton count={3} /> : movieDetails.overview}
          </SubTitle>
        </Sidebar>
      </MovieDetails>

      {/* Similar Movies Section */}
      <h2>Similar Movies</h2>
      <SimilarMovies>
        {similarMovies.length > 0
          ? similarMovies.map((movie) => (
              <MovieCard key={movie.id} onClick={() => handleMovieClick(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </MovieCard>
            ))
          : [...Array(5)].map((_, index) => <Skeleton key={index} height={300} width={200} />)}
      </SimilarMovies>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <ModalDialog
          open={openDialog}
          handleClose={handleDialogClose}
          view={selectedMovie}
          crew={selectedMovie?.cast || []}
          type={type}
        />
      )}
    </Container>
  );
}
