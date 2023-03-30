'use client';

import useMediaQuery from '@/shared/hooks/useMediaQuery';
import Link from 'next/link';

export const PageHeading = () => {
  const isWider = useMediaQuery('(min-width: 640px)');

  return (
    <h1 className="prose text-center text-2xl sm:text-3xl md:text-5xl mt-8">
      {`${isWider ? 'Software' : 'JS'} Developer`}
      <Link
        className="ml-2 animated-link"
        href="https://boldare.com"
        target="_blank"
        rel="norefferer"
      >
        @Boldare
      </Link>
    </h1>
  );
};
