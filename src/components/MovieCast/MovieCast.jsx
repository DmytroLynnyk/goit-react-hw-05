import { useParams } from 'react-router-dom';
import { getMovieCast, getPoster } from '../../apiService/Films';
import { useEffect, useState } from 'react';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  console.log(movieCast);

  useEffect(() => {
    getMovieCast(movieId)
      .then(resp => {
        setMovieCast(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      {movieCast.length > 0 && (
        <ul>
          {movieCast.map(({ id, name, character, profile }) => (
            <li key={id}>
              <img src={getPoster(profile)} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
      MovieCast
    </div>
  );
};
