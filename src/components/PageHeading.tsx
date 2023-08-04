import Link from 'next/link';

export const PageHeading = () => {
  return (
    <h1 className="prose text-center text-2xl sm:text-3xl mt-8">
      Currently
      <Link
        className="ml-4 animated-link"
        href="https://boldare.com"
        target="_blank"
        rel="norefferer"
      >
        @Boldare
      </Link>
    </h1>
  );
};
