import { MovieRepository } from '@/infrastructure/repositories/movie-repository';
import { GetPopularMoviesUseCase } from '@/core/usecases/get-popular-movies';
import Image from 'next/image';
import NavigationBar from '@/presentation/components/molecules/navigationBar/NavigationBar';
import MovieList from '@/presentation/components/organisms/movieList/MovieList';
import TopTen from '@/presentation/components/atoms/svg/TopTen';
import { Info, Play, Plus } from 'lucide-react';

export default async function HomePage() {
  const movieRepository = new MovieRepository();
  const getPopularMovies = new GetPopularMoviesUseCase(movieRepository);

  try {
    const { results: movies } = await getPopularMovies.execute();

    return (
      <main>
          <section className='relative h-dvh'>
            <NavigationBar />
            <Image
              src="https://image.tmdb.org/t/p/original/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg"
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              unoptimized
              className='absolute -z-10 top-0 w-full h-[85%] md:h-full object-cover brightness-50'
            />
            <section className='flex flex-col h-[calc(100vh-68px)]'>
              <section className='flex flex-col lg:flex-row-reverse h-4/5'>
                <div className='basis-8/12'></div>
                <section className='basis-4/12 flex flex-col items-center justify-center'>
                <div className='flex w-full justify-center items-center px-10 lg:justify-start'>
                  <Image
                    src="/asset/images/logo/shot_netflix_logo.png"
                    alt=''
                    width={0}
                    height={0}
                    sizes='100vw'
                    unoptimized
                    className='w-10'
                  />
                  <p className='text-white'>SERIES</p>
                </div>
                  <Image
                    src="/asset/images/logo/sonic_logo.webp"
                    alt=''
                    width={0}
                    height={0}
                    sizes='100vw'
                    unoptimized
                    className='w-full sm:w-4/5 lg:w-full'
                  />
                  <div className='hidden lg:flex items-end w-full px-10 text-white text-xl xl:text-2xl font-semibold mb-4'><TopTen /><div>#1In TV Shows Today</div></div>
                  <div className='hidden lg:block text-white px-10 lg:!line-clamp-3'>Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.</div>
                  <div className='flex justify-center items-center gap-5 h-14 lg:self-start lg:px-10'>
                    <div className='flex flex-col items-center  px-4 py2 text-white lg:hidden'>
                      <Plus width={20} />
                      <div className='text-sm lg:text-md'>My List</div>
                    </div>
                    <div className='flex items-center gap-2 px-4 py2 bg-white rounded h-8'><Play width={18}/>play</div>
                    <div className='flex flex-col items-center px-4 py2 text-white lg:h-8 lg:flex-row lg:bg-gray-500 lg:rounded lg:gap-2'>
                      <Info width={20} />
                      <div className='text-sm lg:text-md lg:hidden'>Info</div>
                      <div className='hidden lg:block'>More Info</div>
                    </div>
                  </div>
                </section>
              </section>
              <MovieList movies={movies} title="Popoular Moives" />
            </section>
          </section>
      </main>
    );
  } catch (error) {
    console.error('Failed to load movies:', error);
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Failed to load movies</p>
      </div>
    );
  }
}