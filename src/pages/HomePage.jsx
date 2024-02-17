import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../apiService/Films';
import { MovieList } from '../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    getTrendingMovies({
      abortController: controller,
    })
      .then(resp => {
        setMovies(resp.movies);
      })
      .catch(error => {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>Trending now</h2>
      {error && <p>Oops! Error!</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
