import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../apiService/Films';
import './App.css';
import { MovieList } from './MovieList';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then(resp => {
        setMovies(resp.movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Trending now</h2>
      <MovieList movies={movies} />
    </div>
  );
};
