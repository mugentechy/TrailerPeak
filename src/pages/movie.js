import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Feature } from '../components';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import { fetchMagnetData } from '../features/magnet/magnetActions'; // Import the thunk

export default function Movie() {
  const dispatch = useDispatch();
  const { name } = useParams();

  // Access Redux state
  const { magnet: magnetData, loading, error } = useSelector((state) => state.magnet);

 console.log(magnetData)

  useEffect(() => {
    dispatch(fetchMagnetData(name));
  }, [dispatch, name]);

  // YouTube component options
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <div>
      <Feature>
        <Feature.Title>{name}</Feature.Title>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : magnetData ? (
          <YouTube videoId={magnetData} opts={opts} />
        ) : (
          <p>No video available.</p>
        )}
      </Feature>
    </div>
  );
}