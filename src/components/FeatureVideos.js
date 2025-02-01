import React from 'react';
import '../assets/feature.css'; // Create a new CSS file for styling
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';


const FeatureVideos = ({ videos, onVideoClick }) => {
  const rowRef = useRef(null);

  // Scroll functionality
  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.8;

      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="feature_videos">
      <h2 className="feature_title">Features</h2>

      <div className="feature_container">
        {/* Left Arrow */}
        <button className="scroll_button left" onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>

        {/* Videos Row */}
        <div className="feature_posters" ref={rowRef}>
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="feature_poster_container"
              onClick={() => onVideoClick(index)}
            >
              <img
                className="feature_poster"
                src={`https://img.youtube.com/vi/${video.key}/0.jpg`} // YouTube thumbnail
                alt={video.name}
              />
              <div className="feature_poster_overlay">
              
                <p>{video.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="scroll_button right" onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FeatureVideos;