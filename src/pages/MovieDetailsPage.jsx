import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../apiService/Films';
import { MovieListItem } from '../components/MovieListItem/MovieListItem';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

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
  }, []);

  return (
    <div>
      <Link to={backLinkRef.current ?? '/movies'}>Go back</Link>
      {movie && <MovieListItem movie={movie} />}
    </div>
  );
}
