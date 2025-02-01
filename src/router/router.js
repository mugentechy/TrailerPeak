import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Movie, Movies, Series, Browse, NotFound, SearchResults } from '../pages';
import Layout from '../components/Layout';
import BrowserContainer from '../containers/browser';
import Footer from '../containers/footer';
import Loading from '../components/Loading';

export default function Router() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., API fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time based on your actual load time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<BrowserContainer />} />
              <Route path="movie/:id/:type/:name" element={<Movie />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<Series />} />
              <Route path="browse" element={<Browse />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>

          {/* Footer is rendered outside the Routes */}
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
