import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieById } from '../apiService/Films';
import { MovieListItem } from '../components/MovieListItem/MovieListItem';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    getMovieById({
      movieId: movieId,
      abortController: controller,
    })
      .then(resp => {
        setMovie(resp.data.data);
      })
      .catch(error => {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      });

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <Link to="/">Go back</Link>
      {movie && <MovieListItem movie={movie} />}
    </div>
  );
}
