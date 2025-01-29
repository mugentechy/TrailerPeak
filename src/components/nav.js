import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OptForm } from '../components';
import '../assets/nav.css';
import { FcFilmReel } from "react-icons/fc";
const API_KEY = '64422b19ff6d242b3851b117c783ec08';  // Replace with actual API key

const Nav = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      console.log(data.results)
      
      navigate('/search', { state: { results: data.results, query } });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav-container">
   
       <a href="/" className="logo">

  
  TrailerPeak
</a>

        <div className="nav-links">
          <a href="/series" className="link">Tv Shows</a>
          <a href="/movies" className="link">Movies</a>
        </div>

        <OptForm className="nav-search" onSubmit={handleSearch}>
          <OptForm.Input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <OptForm.Button />
        </OptForm>

      </div>
    </div>
  );
};

export default Nav;
