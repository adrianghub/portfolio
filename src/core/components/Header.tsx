'use client';

import { SearchSpotlight } from '@/modules/blog/components/SearchSpotlight';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const stickyHeaderPath = pathname === '/';

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
          <Link
            href="/blog"
            className="prose font-bold text-xl lg:text-xl mr-5 hover:text-gray-500 duration-200"
          >
            Blog
          </Link>
          <Link
            href="/resume"
            className="prose animated-link font-bold text-xl lg:text-xl mr-5"
          >
            Resume
          </Link>
          <SearchSpotlight />
          {/* <Link href="/buymeacoffee" className="ml-4 hover:animate-bounce">
                <Image src={coffeeCup} alt="Coffee cup" />
              </Link> */}
        </div>
      </div>
    </div>
  );
};
