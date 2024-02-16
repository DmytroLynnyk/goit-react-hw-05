import { Link, NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
// import { useEffect, useState } from 'react';
// import { getTrendingMovie } from '../apiService/Films';
// import { MovieList } from './MovieList';

export const App = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getTrendingMovie()
  //     .then(resp => {
  //       setMovies(resp.movies);
  //       console.log(movies);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  // http://localhost:5173/home
  // http://localhost:5173/movies

  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx();
          }}
        >
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
};
