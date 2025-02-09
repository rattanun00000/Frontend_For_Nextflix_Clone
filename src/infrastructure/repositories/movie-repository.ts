import { MovieResponse } from '@/core/domain/entities/Movie';
import { IMovieRepository } from '@/core/domain/interfaces/movie-repository';

export class MovieRepository implements IMovieRepository {
  async getPopularMovies(): Promise<MovieResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/popular`, {
    });
    console.log(process.env.NEXT_PUBLIC_API_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    
    const data = await response.json();
    return data as MovieResponse;
  }
}