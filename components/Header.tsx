import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBar } from './SearchBar';
import { Categories } from './Categories';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={`container mx-auto px-10 mb-8 ${
        pathname === '/' ? 'sticky top-0' : ''
      }`}
    >
      <div className="border-b w-full border-gray-300 py-8 flex flex-col justify-between items-center sm:flex-row">
        <div className="block py-4">
          <Link href="/">
            <span className="site-title cursor-pointer text-3xl lg:text-5xl">
              portfolio
            </span>
          </Link>
        </div>
        <div className="flex justify-end items-center">
          {pathname !== '/search' && pathname !== '/' ? (
            <SearchBar />
          ) : (
            <>
              <Link href="/blog">
                <span className="cursor-pointer font-bold text-xl lg:text-xl mr-5 hover:text-gray-500 duration-200">
                  Blog
                </span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="norefferer"
                className="animated-link"
              >
                <span className="cursor-pointer font-bold text-xl lg:text-xl">
                  Resume
                </span>
              </a>
            </>
          )}
        </div>
      </div>
      {pathname !== '/' && <Categories />}
    </div>
  );
};
