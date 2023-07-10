import { useEffect, useState } from 'react';
import {movieAPI} from 'components/services/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import type {
  IFilmInfo,
} from "types/movieTypes";

import type {
  TStatus,
} from "types/statusTypes";

function Home() {
  const [movies, setMovies] = useState<IFilmInfo[]>([]);
  const [status, setStatus] = useState<TStatus>('idle');
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    setStatus('pending');
    movieAPI.getTrendingMovies()
      .then(data => {
        setStatus('resolved');
        if (data?.length) {
          setMovies(data);
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  return (
    <div>
      <h1>Tranding movies</h1>
      {status === 'pending' && <Loader />}
      {status !== 'rejected' && <MoviesList movies={movies} />}
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Home;
