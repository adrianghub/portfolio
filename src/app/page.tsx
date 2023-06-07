import { NewsletterForm, SocialMediaRow } from '@/shared/components';
import { Metadata } from 'next';
import Link from 'next/link';
import { openGraphImage } from './shared-metadata';

export const metadata: Metadata = {
  title: 'Developer Portfolio | Adrian Zinko',
  description: 'Portfolio with blog section. Download resume provided in pdf format from the resume subpage.',
  openGraph: {
    ...openGraphImage,
  },
};

const IndexPage = () => {
  return (
    <div className="grid place-items-center min-h-[calc(100vh-245px)]">
      <h1 className="prose text-center text-2xl sm:text-3xl md:text-5xl mt-8">
        Currently
        <Link
          className="ml-2 animated-link"
          href="https://boldare.com"
          target="_blank"
          rel="norefferer"
        >
          @Boldare
        </Link>
      </h1>

      <div className="my-8">
        <SocialMediaRow />
      </div>

      <NewsletterForm />
    </div>
  );
};

export default IndexPage;
