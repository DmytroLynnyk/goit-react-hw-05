import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../apiService/Films';
import { MovieList } from '../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
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
}
