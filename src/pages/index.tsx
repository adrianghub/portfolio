import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Loader,
  SeoWrapper,
  SocialMediaRow,
  SubscribeForm
} from 'shared/components';

const seoData = {
  title: 'Home | Adrian Zinko',
  description: 'Portfolio website'
};

const IndexPage = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <SeoWrapper {...seoData}>
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

          {/* <CoffeeForm /> */}
        </div>
      </div>
    </SeoWrapper>
  );
};

export default IndexPage;
