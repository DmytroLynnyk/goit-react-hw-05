import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieById } from '../apiService/Films';
import { MovieListItem } from '../components/MovieListItem/MovieListItem';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(resp => {
        setMovie(resp.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      <Link to="/">Go back</Link>
      {movie && <MovieListItem movie={movie} />}
    </div>
  );
}
