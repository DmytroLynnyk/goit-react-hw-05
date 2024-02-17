import { Link, Outlet } from 'react-router-dom';
import { getPoster } from '../../apiService/Films';

export const MovieListItem = ({ movie }) => {
  return (
    <div>
      <img src={getPoster(movie.poster_path)} alt={movie.title} />
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
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
