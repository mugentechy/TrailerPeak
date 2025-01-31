
import Banner from '../components/banner'
import { useEffect } from "react";
import '../app.css'
import Nav from '../components/nav'
import Footer from '../containers/footer'
import { BrowserRouter, Routes, Route, Outlet,useNavigate } from 'react-router'
import {  Movie,Movies,Series, Browse, NotFound,SearchResults } from '../pages'
import Layout from '../components/Layout'; 
import BrowserContainer from '../containers/browser'
import { useDispatch } from 'react-redux'



export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route element={<Layout />}>
          <Route  path="/" element={<BrowserContainer />} />
          <Route path="movie/:id/:type/:name" element={<Movie />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="browse" element={<Browse />} />
              <Route path="/search" element={<SearchResults />} />
               <Route path="*" element={<NotFound />} />
        </Route>

    
       
      </Routes>

      {/* Footer is rendered outside the Routes to appear on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

