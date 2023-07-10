import axios from 'axios';
import toast from 'react-hot-toast';

// #API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'd03712107dcdd723f1173c5ee2c0d8c1' },
});

class MovieAPI {
  public async getTrendingMovies() {
    try {
      const movies = await agent.get('trending/movie/day', {
        params: {
          language: 'en-US',
        },
      });
      if (movies.status === 204) {
        throw new Error('no movies');
      }
      return movies?.data?.results;
    } catch (error) {
      toast.error('Something went wrong 😥!');
      console.error(error);
    }
  }

  public async getMoviesByQuery(query: string, controller: AbortController) {
    try {
      const movies = await agent.get('search/movie', {
        params: {
          query,
          signal: controller.signal,
        },
      });

      return movies?.data?.results;
    } catch (error) {
      toast.error('Something went wrong 😥!');
      console.error(error);
    }
  }

  public async getMoviesDetailsById(id: string, controller: AbortController) {
    try {
      const movie = await agent.get(`movie/${id}`, {
        params: {
          signal: controller.signal,
        },
      });

      return movie?.data;
    } catch (error) {
      toast.error('Something went wrong 😥!');
      console.error(error);
    }
  }

  // export async function getMovieCast(id, controller) {
  //   try {
  //     const actors = await agent.get(`movie/${id}/credits`, {
  //       params: {
  //         signal: controller.signal,
  //       },
  //     });

  //     return actors?.data?.cast;
  //   } catch (error) {
  //     toast.error('Something went wrong 😥!');
  //     console.error(error);
  //   }
  // }

  // export async function getMovieReviews(id, controller) {
  //   try {
  //     const reviews = await agent.get(`movie/${id}/reviews`, {
  //       params: {
  //         signal: controller.signal,
  //       },
  //     });

  //     return reviews?.data?.results;
  //   } catch (error) {
  //     toast.error('Something went wrong 😥!');
  //     console.error(error);
  //   }
  // }
}

const movieAPI = new MovieAPI();

export { movieAPI };
