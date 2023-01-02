import { Categories } from 'modules/blog/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBar } from 'shared/components';

export const Header = () => {
  const { pathname } = useRouter();

  const stickyHeaderPath = pathname === '/' || pathname === '/resume';
  const noSearchPath =
    pathname !== '/search' && pathname !== '/' && pathname !== '/resume';

  return (
    <div
      className={`container mx-auto px-8 mb-8 ${
        stickyHeaderPath ? 'sticky top-0 backdrop-blur-sm' : ''
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
          {noSearchPath ? (
            <SearchBar />
          ) : (
            <>
              <Link href="/blog">
                <span className="cursor-pointer font-bold text-xl lg:text-xl mr-5 hover:text-gray-500 duration-200">
                  Blog
                </span>
              </Link>
              <Link href="/resume" className="animated-link">
                <span className="cursor-pointer font-bold text-xl lg:text-xl">
                  Resume
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
      {pathname !== '/' && <Categories />}
    </div>
  );
};
