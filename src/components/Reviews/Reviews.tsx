import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {movieAPI} from 'components/services/moviesApi';
import { List } from './Reviews.styled';
import type {
  IReviewInfo
} from "types/movieTypes";

function Reviews() {
  const [reviews, setReviews] = useState<IReviewInfo[] | []>([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortConroller = new AbortController();

     if (movieId) {
     movieAPI.getMovieReviews(movieId, abortConroller).then(setReviews);
    }

    return () => {
      abortConroller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <List>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </List>
    </div>
  );
}

export default Reviews;
