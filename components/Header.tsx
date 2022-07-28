import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBar } from './SearchBar';
import { Categories } from './Categories';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-gray-300 py-8 flex flex-col justify-between items-center sm:flex-row">
        <div className="block py-4">
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl lg:text-5xl">
              Portfolio Website
            </span>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <Link href="/blog">
            <span className="cursor-pointer font-bold text-xl lg:text-xl mr-5">
              Blog
            </span>
          </Link>
          {pathname !== '/search' && pathname !== '/' && <SearchBar />}
        </div>
      </div>
      {pathname !== '/' && <Categories />}
    </div>
  );
};
