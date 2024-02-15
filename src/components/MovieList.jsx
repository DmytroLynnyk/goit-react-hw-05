export const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            <li key={movie.id}>
              <p>{movie.title}</p>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};
