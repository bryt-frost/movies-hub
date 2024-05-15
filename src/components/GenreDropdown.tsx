import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Genres } from '../../type';

const GenreDropdown = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 1 day
    },
  };
  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex text-white items-center text-sm font-medium '>
        Genre <ChevronDown className='ml-1' size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data?.genres?.map((genre) => (
          <Link
            href={`/genre/${genre?.id}?genre=${genre?.name}`}
            key={genre?.id}>
            <DropdownMenuItem>{genre?.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default GenreDropdown;
