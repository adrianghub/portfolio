import Link from 'next/link';
import { SocialMediaRow, SubscribeForm } from '@/shared/components';

const IndexPage = () => {
  return (
    <div className="grid place-items-center min-h-[calc(100vh-245px)]">
      <div>
        <h1 className="prose text-center text-2xl md:text-5xl mt-8 mb-16">
          Software Developer
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

        <SubscribeForm />
      </div>
    </div>
  );
};

export default IndexPage;
