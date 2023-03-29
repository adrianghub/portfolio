'use client';

import { ThemeToggle } from '@/app/theme-toggle';
import { SearchSpotlight } from '@/modules/blog/components/SearchSpotlight';
import { Loader } from '@/shared/components';
import { useMounted } from '@/shared/hooks/useMounted';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logoDark from '../../../public/assets/icons/logo-dark.svg';
import logoLight from '../../../public/assets/icons/logo-light.svg';

export const Header = () => {
  const pathname = usePathname();
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  const stickyHeaderPath = pathname === '/';

  return (
    <div
      className={`container mx-auto mb-8 px-8 ${
        stickyHeaderPath ? 'sticky top-0 backdrop-blur-sm' : ''
      }`}
    >
      <div className="border-b w-full border-gray-300 py-8 sm:pb-0 flex flex-col justify-between items-center sm:flex-row">
        <div className="flex items-center py-4">
          {mounted ? (
            <>
              <Link href="/" className="site-title mr-2">
                <Image
                  priority
                  src={resolvedTheme === 'light' ? logoDark : logoLight}
                  alt="Portoflio logo with author name."
                  width={200}
                  height={200}
                />
              </Link>
              <ThemeToggle />
            </>
          ) : (
            <div className="flex items-center">
              <Loader />
            </div>
          )}
        </div>
        <div className="flex justify-end items-center">
          <Link
            href="/blog"
            className="prose text-primary font-bold text-xl lg:text-xl mr-5 hover:text-accent duration-200"
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
