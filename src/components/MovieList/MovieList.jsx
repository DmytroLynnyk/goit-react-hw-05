import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
