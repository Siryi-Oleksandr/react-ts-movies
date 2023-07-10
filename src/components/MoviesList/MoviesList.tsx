import { NavLink, useLocation } from 'react-router-dom';
import { List, Item, ImgWrapper, InfoWrapper } from './MoviesList.styled';
import defaultImg from 'images/movie-pic.jpg';
import type {
  IFilmInfo,
 
} from "types/movieTypes";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';


interface IProps {
  movies: IFilmInfo[];
};

const MoviesList: React.FC<IProps> = (props) => {
  const location = useLocation();

  return (
    <List>
      {props.movies.map(
        ({
          id,
          poster_path,
          original_title,
          name,
          vote_average,
          vote_count,
        }: IFilmInfo) => (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <ImgWrapper>
                <img
                  src={poster_path ? BASE_IMG_URL + poster_path : defaultImg}
                  alt={name}
                />
              </ImgWrapper>
              <InfoWrapper>
                <h2>{original_title ?? name}</h2>
                <p>Rating: {vote_average}</p>
                <p>Votes: {vote_count} </p>
              </InfoWrapper>
            </NavLink>
          </Item>
        )
      )}
    </List>
  );
}

export default MoviesList;
