import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import '../assets/nav.css';

const API_KEY = '64422b19ff6d242b3851b117c783ec08'; // Replace with actual API key

const Nav = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('movie');
  const [menuOpen, setMenuOpen] = useState(false);

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
        `https://api.themoviedb.org/3/search/${searchType}?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      console.log(data.results);

      navigate('/search', { state: { results: data.results, query: query, type: searchType } });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <nav className={`nav ${show ? 'nav_black' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <a href="/" className="logo">TrailerPeak</a>

        {/* Hamburger Menu Icon (Mobile) */}
        

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/series" className="link" onClick={() => setMenuOpen(false)}>TV Shows</a>
          <a href="/movies" className="link" onClick={() => setMenuOpen(false)}>Movies</a>
                {/* Search Bar */}
        <form className="nav-search" onSubmit={handleSearch}>
          <div className="opt-select-container">
            <select
              className="opt-select"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="movie">Movies</option>
              <option value="tv">TV Shows</option>
            </select>
          </div>

          <div className="opt-input-container">
            <input
              type="text"
              className="opt-input"
              placeholder="Search IMDb"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <button type="submit" className="opt-button">
            <FaSearch size={16} />
          </button>
        </form>
        </div>


      </div>
    </nav>
  );
};

export default Nav;
