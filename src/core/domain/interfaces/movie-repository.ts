import { MovieResponse } from "../entities/Movie";

export interface IMovieRepository {
  getPopularMovies(): Promise<MovieResponse>;
}