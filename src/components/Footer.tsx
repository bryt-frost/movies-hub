import Image from 'next/image';
import Link from 'next/link';

const infoArray = [
  {
    title: 'About us',
    href: '/about',
  },
  {
    title: 'Contact us',
    href: '/contact',
  },
  {
    title: 'Terms and Conditions',
    href: '/terms',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
  },
  {
    title: 'Press',
    href: '/press',
  },
];

const contactArray = [
  {
    title: 'Email',
    href: 'mailto:info@movie-studio.com',
    text: 'info@movie-studio.com',
  },
  {
    title: 'Phone',
    href: '+1-202-555-0143',
    text: '+1-202-555-0143',
  },
];

const categoryArray = [
  {
    title: 'Video',
    href: '/video',
  },
  {
    title: 'Gaming',
    href: '/gaming',
  },
  {
    title: 'Travel',
    href: '/travel',
  },
  {
    title: 'Sports',
    href: '/sports',
  },
  {
    title: 'Music',
    href: '/music',
  },
];

const Information = () => {
  return (
    <div className='flex flex-col text-gray-300'>
      {infoArray.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className='hover:text-red-600 text-sm  mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group '>
          <span className='w-2 h-2 rounded-full inline-flex border  border-red-700 group-hover:bg-red-700  duration-200' />
          {item.title}
        </Link>
      ))}
    </div>
  );
};
const Category = () => {
  return (
    <div className='flex flex-col text-gray-300'>
      {categoryArray.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className='hover:text-red-600 text-sm  mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group '>
          <span className='w-2 h-2 rounded-full inline-flex border  border-red-700 group-hover:bg-red-700  duration-200  capitalize' />
          {item.title}
        </Link>
      ))}
    </div>
  );
};
const Contact = () => {
  return (
    <div className='flex flex-col text-gray-300'>
      {contactArray.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className='hover:text-red-600 text-sm  mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center gap-x-3 group '>
          <span className='w-2 h-2 rounded-full inline-flex border  border-red-700 group-hover:bg-red-700  duration-200  capitalize' />
          {item.title} <span>{item.text}</span>
        </Link>
      ))}
    </div>
  );
};
const Footer = () => {
  return (
    <div className='bg-[#191919] px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-gray-600 py-2 mb-5   relative'>
          About us{' '}
          <span className='w-16 h-1 bg-red-600 inline-block left-0 -bottom-[1.5px] absolute z-10' />
        </h2>
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
        <p className='text-gray-300  text-sm leading-6 tracking-wide  mt-5  max-72'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptatem magnam at, aliquam sint placeat itaque officia eligendi eos
          velit similique ratione! Nesciunt temporibus totam aliquam eum porro
          exercitationem ut!
        </p>
      </div>

      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-gray-600 py-2 mb-5   relative'>
          Information
          <span className='w-16 h-1 bg-red-600 inline-block left-0 -bottom-[1.5px] absolute z-10' />
        </h2>
        <Information />
      </div>

      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-gray-600 py-2 mb-5   relative'>
          Category
          <span className='w-16 h-1 bg-red-600 inline-block left-0 -bottom-[1.5px] absolute z-10' />
        </h2>
        <Category />
      </div>

      <div>
        <h2 className='text-base uppercase font-bold text-white tracking-wide border-b border-gray-600 py-2 mb-5   relative'>
          Connect with us
          <span className='w-16 h-1 bg-red-600 inline-block left-0 -bottom-[1.5px] absolute z-10' />
        </h2>
        <Contact />
      </div>
    </div>
  );
};
export default Footer;
