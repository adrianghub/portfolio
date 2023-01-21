'use client';

import { SearchBar } from 'modules/blog/components';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import coffeeCup from '../../../public/assets/icons/coffee-cup.svg';

export const Header = () => {
  const pathname = usePathname();

  const stickyHeaderPath = pathname === '/';
  const noSearchPath =
    pathname !== '/search' && pathname !== '/' && pathname !== '/resume';

  return (
    <div
      className={`container mx-auto mb-8 px-8 ${
        stickyHeaderPath ? 'sticky top-0 backdrop-blur-sm' : ''
      }`}
    >
      <div className="border-b w-full border-gray-300 py-8 flex flex-col justify-between items-center sm:flex-row">
        <div className="block py-4">
          <Link href="/" className="site-title text-3xl lg:text-5xl">
            portfolio
          </Link>
        </div>
        <div className="flex justify-end items-center">
          {noSearchPath ? (
            <SearchBar />
          ) : (
            <>
              <Link
                href="/blog"
                className="prose font-bold text-xl lg:text-xl mr-5 hover:text-gray-500 duration-200"
              >
                Blog
              </Link>
              <Link
                href="/resume"
                className="prose animated-link font-bold text-xl lg:text-xl"
              >
                Resume
              </Link>
              <Link href="/buymeacoffee" className="ml-4 hover:animate-bounce">
                <Image src={coffeeCup} alt="Coffee cup" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
