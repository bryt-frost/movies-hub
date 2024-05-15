import Image from 'next/image';
import Link from 'next/link';
import GenreDropdown from './GenreDropdown';
import SearchInput from './SearchInput';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <div className='flex items-center justify-between backdrop-blur-2xl p-5 bg-[#12121296] transition-colors gap-4  md:gap-0 sticky z-50 top-0'>
      <Link href={'/'}>
        {' '}
        <Image
          src='https://i.ibb.co/ZW0SbjJ/logo-dark.png'
          width={120}
          height={100}
          alt='logo'
          priority={true}
          className='cursor-pointer w-40 h-auto'
        />
      </Link>
      <div className='text-white flex space-x-2 items-center'>
        {/* genre */}
        <GenreDropdown />
        {/* search */}
        <SearchInput />
        {/* theme toggler */}
        <ThemeToggler />
      </div>
    </div>
  );
};
export default Header;
