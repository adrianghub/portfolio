'use client';

import { Send_Flowers } from 'next/font/google';
import { ThemeToggle } from '@/app/theme-toggle';
import { SearchSpotlight } from '@/modules/blog/components/SearchSpotlight';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sentFlowersFont = Send_Flowers({ weight: '400', subsets: ['latin'] });

export const Header = () => {
  const pathname = usePathname();

  const stickyHeaderPath = pathname === '/';

  return (
    <div
      className={`container mx-auto mb-8 md:px-8 ${
        stickyHeaderPath ? 'sticky top-0 backdrop-blur-sm' : ''
      }`}
    >
      <div className="border-b w-full border-gray-300 py-8 sm:pb-0 flex flex-col justify-between items-center sm:flex-row">
        <div className="flex items-center pb-4">
          <>
            <Link href="/" className="site-title">
              <p
                className={`${sentFlowersFont.className} px-4 text-[22px] lg:text-[36px] xl:text-[46px] site-logo`}
              >
                Adrian Zinko - Software Developer
              </p>
            </Link>
          </>
        </div>
        <div className="flex justify-end items-center">
          <ThemeToggle />
          <Link
            href="/blog"
            className="prose text-primary font-bold text-xl lg:text-xl mx-5 hover:text-accent duration-200"
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
        </div>
      </div>
    </div>
  );
};
