export interface IFilmInfo {
  id: number;
  original_title: string;
  name?: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title: string;
  //   adult?: boolean;
  //   original_language?: string;
  //   overview?: string;
  //   media_type?: string;
  //   genre_ids?: number[];
  //   popularity?: number;
  //   release_date?: string;
  //   video?: boolean;
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

export interface IGenre {
  name: string;
}
