import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBar } from './SearchBar';

export const Header = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full border-gray-300 py-8 flex flex-col items-center sm:flex-row justify-between">
        <div className="block py-4">
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl lg:text-5xl">
              Software Paradigm | Blog
            </span>
          </Link>
        </div>
        {router.pathname !== '/search' && <SearchBar />}
      </div>
    </div>
  );
};