import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ModalDialog from '../components/ModalDialog';
import { SimilarMovies,SearchMovies, MovieCard } from '../assets/feature';

const SearchResults = () => {
  const location = useLocation();
  const { results = [], query = '' } = location.state || {}; 

  // State for modal
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Handle movie selection
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setOpenDialog(true);
  };

  // Close modal
  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <h2>Search Results for "{query}"</h2>


      <SearchMovies  className="SearchMovies">
        {results.length > 0
          ? results.map((movie) => (
              <MovieCard key={movie.id} onClick={() => handleMovieClick(movie)}>
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : '/placeholder.jpg'}
                  alt={movie.title || 'No Title'}
                />
                <p>{movie.title || movie.name}</p>
              </MovieCard>
            ))
          : [...Array(5)].map((_, index) => <div key={index} className="skeleton" />)}
      </SearchMovies>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <ModalDialog
          open={openDialog}
          handleClose={handleDialogClose}
          view={selectedMovie}
          crew={selectedMovie?.cast || []}
          type='movie'
        />
      )}
    </div>
  );
};

export default SearchResults;
