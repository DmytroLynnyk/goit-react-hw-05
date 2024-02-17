import { useEffect, useState } from 'react';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { MovieList } from '../components/MovieList/MovieList';
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { getMovies } from '../apiService/Films';

export default function MovieSearchPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const onSubmit = query => {
    setPage(1);
    setMovies([]);
    setTotalResults(0);
    setQuery(query);
    if (query === '') return toast.error('Write something to start searching');
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getMovies(query, page)
      .then(resp => {
        setTotalResults(resp.totalMovies);
        setMovies(oldMovies => [...oldMovies, ...resp.movies]);
      })
      .catch(err => {
        console.log(err.message);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchMovie onSubmit={onSubmit} movies={movies} />
      <MovieList movies={movies} />
      {movies.length < totalResults && (
        <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage>
          Oops, something went wrong. Try again later...
        </ErrorMessage>
      )}
    </div>
  );
}
