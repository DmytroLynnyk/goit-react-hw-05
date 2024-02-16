import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieById } from '../apiService/Films';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const controller = new AbortController();

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
      {movie && (
        <div>
          <div>
            <h1>
              {movie.title} ({movie.release_date.substring(0, 4)})
            </h1>
            <p>User score: {Math.round(movie.vote_average * 10)}&#x25;</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </p>
          </div>
          <h3>Additional information</h3>
          <ul>
            <Link>Cast</Link>
            <Link>Reviews</Link>
          </ul>
        </div>
      )}
    </div>
  );
}
