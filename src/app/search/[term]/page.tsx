import MovieContainer from '@/components/MovieContainer';
import { getPopularMovies, getSearchMovies } from '@/lib/getMovies';

interface Props {
  params: {
    term: string;
  };
}

const SearchPage = async ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);
  const movies = await getSearchMovies(termToUse);
  const popularMovies = await getPopularMovies();
  return (
    <div className='py-10 max-w-screen-xl mx-auto'>
      <h2 className='text-4xl font-bold px-10 mb-5'>Results for {termToUse}</h2>

      <MovieContainer title={'Search'} movies={movies} isVertical={true} />
      <MovieContainer
        title={'Recommended'}
        movies={popularMovies}
        isVertical={true}
      />
    </div>
  );
};
export default SearchPage;
