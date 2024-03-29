export interface IFilmInfo {
  id: number;
  original_title: string;
  name?: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title: string;
}

export interface IGenre {
  name: string;
}

export interface IFilmDetails {
  original_title: string;
  poster_path: string;
  vote_average: number;
  title: string;
  overview: string;
  release_date: string;
  genres: IGenre[];
}

export interface ICastInfo {
  original_name: string;
  profile_path: string;
  cast_id: number;
}

export interface IReviewInfo {
  author: string;
  content: string;
  id: string;
}
