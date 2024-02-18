import { useEffect, useState } from 'react';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { MovieList } from '../components/MovieList/MovieList';
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { getMovies } from '../apiService/Films';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function MovieSearchPage() {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const query = params.get('query') ?? '';

  const onSubmit = query => {
    setPage(1);
    setMovies([]);
    setTotalResults(0);

    if (query !== '') {
      params.set('query', query);
      setParams(params);
    }

    if (query === '') return toast.error('Write something to start searching');
  };

  useEffect(() => {
    const controller = new AbortController();

    if (!query) return;
    setIsLoading(true);
    getMovies({
      page: page,
      query: query,
      abortController: controller,
    })
      .then(resp => {
        setTotalResults(resp.totalMovies);
        setMovies(resp.movies);
      })
      .catch(error => {
        if (axios.isCancel(error)) return;
        setError(true);
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchMovie value={query} onSubmit={onSubmit} movies={movies} />
      <Toaster position="top-left" reverseOrder={false} />
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
