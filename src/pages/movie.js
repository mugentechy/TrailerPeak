import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchMagnetData } from '../features/magnet/magnetActions';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Row from '../components/Row'; // Import Row component
import FeatureVideos from '../components/FeatureVideos'; // Import the new FeatureVideos component
import { Container, Title, SubTitle, MovieDetails, VideoSection, Sidebar, Reactions } from '../assets/feature';

const API_KEY = '64422b19ff6d242b3851b117c783ec08';

export default function Movie() {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { loading } = useSelector((state) => state.magnet);

  // Fetch Movie Details
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    if (id) {
      fetchMovieDetails();
    }
  }, [id, type]);

  // Fetch Movie Videos
  useEffect(() => {
    async function fetchMovieVideos() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`
        );
        setMovieVideos(response.data.results);
      } catch (error) {
        console.error('Error fetching movie videos:', error);
      }
    }

    if (id) {
      fetchMovieVideos();
    }
  }, [id, type]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < movieVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  };

  return (
    <Container>
      <MovieDetails>
        {/* Video Section */}
        <VideoSection>
          {loading ? (
            <Skeleton sx={{ backgroundColor: '#111' }} height={390} width="100%" />
          ) : (
            <YouTube
              videoId={movieVideos[currentVideoIndex]?.key}
              opts={opts}
              onEnd={handleVideoEnd}
            />
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
              <Title>{movieDetails.title || movieDetails.name}</Title>
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

          <Title>Official Trailer</Title>
          <SubTitle>{loading ? <Skeleton count={3} /> : movieDetails.overview}</SubTitle>
        </Sidebar>
      </MovieDetails>

      {/* Feature Videos Section */}
      <FeatureVideos videos={movieVideos} onVideoClick={handleVideoClick} />

      {/* Recommended and Similar Movies */}
      <Row title="Recommended Movies" fetchUrl={`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}`} type={type} />
      <Row title="Similar Movies" fetchUrl={`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${API_KEY}`} type={type} />
    </Container>
  );
}

