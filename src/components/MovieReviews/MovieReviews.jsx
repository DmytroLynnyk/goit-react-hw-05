import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../apiService/Films';
import css from './MovieReviews.module.css';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getMovieReviews({
      movieId: movieId,
      abortController: controller,
    })
      .then(resp => {
        setMovieReviews(resp.data.data.results);
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
      {movieReviews.length > 0 && (
        <ul className={css.list}>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id} className={css.listItem}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {movieReviews.length === 0 && (
        <div>We don`t have any reviews for this movie.</div>
      )}
    </div>
  );
};
