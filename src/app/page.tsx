import Link from 'next/link';
import { SocialMediaRow, SubscribeForm } from 'shared/components';

const IndexPage = () => {
  return (
    <div className="grid place-items-center min-h-[calc(100vh-245px)]">
      <div>
        <h2 className="text-lg md:text-3xl mb-8 text-center">
          Software Developer
          <Link
            className="ml-2 animated-link"
            href="https://boldare.com"
            target="_blank"
            rel="norefferer"
          >
            @Boldare
          </Link>
        </h2>

        <div className="my-8">
          <SocialMediaRow />
        </div>

        <SubscribeForm />
      </div>
    </div>
  );
};

export default IndexPage;
