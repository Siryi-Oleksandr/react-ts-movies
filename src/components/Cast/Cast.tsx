import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {movieAPI} from 'components/services/moviesApi';
import { List } from './Cast.styled';
import type {
  ICastInfo,
} from "types/movieTypes";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Cast() {
  const [cast, setCast] = useState<ICastInfo[] | []>([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();
     if (movieId) {
      movieAPI.getMovieCast(movieId, abortConroller).then(setCast);
    }
  
    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.map(cast => (
          <li key={cast.cast_id}>
            <img
              width={250}
              src={BASE_IMG_URL + cast.profile_path}
              alt={cast.original_name}
            />
            <p>{cast.original_name}</p>
          </li>
        ))}
      </List>
    </div>
  );
}

export default Cast;
