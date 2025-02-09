import { IMovieRepository } from '@/core/domain/interfaces/movie-repository';
import { MovieResponse } from '../domain/entities/Movie';

export class GetPopularMoviesUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  execute(): Promise<MovieResponse> {
    return this.movieRepository.getPopularMovies();
  }
}