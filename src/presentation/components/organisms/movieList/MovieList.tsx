"use client"
import React from 'react'
import MovieCard from '../../molecules/movieCard/MovieCard'
import { Movie } from '@/core/domain/entities/Movie'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'

interface MovieListProps {
  movies: Movie[]
  title: string
}

const MovieList: React.FC<MovieListProps> = ({ movies, title}) => {
  return (
    <main className="w-full h-1/4 pl-2 bg-gradient-to-b from-black/0 from-10% via-black via-30% to-black lg:pl-10">
      <h2 className='text-white text-xl font-semibold mb-2'>{title}</h2>
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={12}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide 
            key={movie.id}
            className="!w-auto" // Override Swiper's default width
          >
            <MovieCard
              title={movie.title}
              imageUrl={movie.backdrop_path}
              imageUrlMb={movie.poster_path}
              netflix={movie.vote_average >= 6.6 && movie.vote_average <= 8}
              topTen={movie.vote_average >= 6.6}
              newSeason={movie.vote_count}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}

export default MovieList