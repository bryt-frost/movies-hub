'use client';

import Image from 'next/image';
import { Movie } from '../../type';
import { getImagePath } from '@/lib/getImagePath';
import { useRouter } from 'next/navigation';

const MovieCard = ({ movie }: { movie: Movie }) => {
  const router = useRouter();
  const handleRoute = () => {
    router.push(`/movie/${movie?.id}`);
  };
  return (
    <div
      onClick={handleRoute}
      className='relative flex-shrink-0 cursor-pointer transform  hover:scale-105 transistion duration-200 ease-out  hover:drop-shadow-lg'>
      <div className='absolute top-0 left-0  inset-0 bg-gradient-to-b  from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29] z-10' />
      <p className='absolute z-20 left-5 bottom-5'>{movie.title}</p>
      <Image
        src={getImagePath(movie?.backdrop_path || movie?.poster_path)}
        alt={movie?.title}
        width={1920}
        height={1080}
        className='w-fit lg:min-w-[400px]  h-56 object-contain shadow-md shadow-[#191919] drop-shadow-xl'
      />
    </div>
  );
};
export default MovieCard;
