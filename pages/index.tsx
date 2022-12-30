import { Loader, SeoWrapper } from 'components';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
      <div className="container mx-auto px-10 mb-8">
        <div className="grid place-items-center min-h-[calc(100vh-245px)]">
          <p className="text-xl">
            Currently under construction. Check out the
            <span className="mx-2 font-bold">
              <Link className="animated-link" href="/blog" passHref>
                Blog
              </Link>
            </span>
            or
            <span className="mx-2 font-bold">
              <a
                className="animated-link"
                target="_blank"
                rel="norefferer"
                href="/resume.pdf"
              >
                Resume
              </a>
            </span>
            instead.
          </p>
        </div>
      </div>
    </SeoWrapper>
  );
};

export default IndexPage;
