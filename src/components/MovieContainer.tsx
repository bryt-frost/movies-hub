import Link from 'next/link';
import { Movie } from '../../type';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';

interface Props {
  movies?: Movie[];
  title?: string;
  isVertical?: boolean;
}

const MovieContainer = ({ movies, title, isVertical }: Props) => {
  return (
    <div>
      <div className='mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4'>
        <h2 className='text-sm font-bold tracking-wider uppercase'>{title}</h2>
        <Link
          href={{ pathname: '/viewmore', query: { title: title } }}
          className='bg-gray-800 text-xs text-white px-2  py-1 rounded-md  border-gray-600 font-semibold hover:bg-black'>
          view more
        </Link>
        <span className='w-16 h-1 absolute  bg-red-600 inline-block, left-0 -bottom-[1.5px] z-10' />
      </div>
      <div
        className={cn(
          'flex  space-x-4 overflow-scroll px-5 py-5 lg:px-10  scrollbar-hide',
          isVertical && 'flex-col space-x-0  space-y-12',
        )}>
        {isVertical
          ? movies?.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    'flex flex-col space-y-5  mb-5 items-center  lg:flex-row space-x-5',
                )}>
                {' '}
                <MovieCard movie={movie} />
                <div className='max-w-2xl  '>
                  <p className='font-bold'>
                    {movie?.title} ({movie?.release_date?.split('-')[0]})
                  </p>
                  <hr className='mb-3 ' />
                  <p>{movie?.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
export default MovieContainer;
