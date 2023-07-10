import { useState, useEffect  } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { FcSearch } from 'react-icons/fc';
import {movieAPI} from 'components/services/moviesApi';
import { Form, Input, SearchBtn } from './Movies.styled';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');
    const abortConroller = new AbortController();
    movieAPI.getMoviesByQuery(query, abortConroller)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });

    return () => {
      abortConroller.abort();
    };
  }, [query]);



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextParams: URLSearchParamsInit  = query !== '' ? { query: e.currentTarget.query.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h1>Movies</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          value={value ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          type="text"
          name="query"
        />
        <SearchBtn type="submit" className="searchForm-button">
          <FcSearch size="2em" />
        </SearchBtn>
      </Form>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={movies} />}
      {status === 'rejected' && error && <Error error={error} />}
    </div>
  );
}

export default Movies;
