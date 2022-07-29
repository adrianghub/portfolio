import Head from 'next/head';
import { Loader } from 'components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const IndexPage = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Home | Adrian Zinko</title>
      </Head>
      <div className="grid place-items-center min-h-[calc(100vh-145px-32px)]">
        <p className="text-xl">
          Currently under construction. Checkout the
          <span className="mx-1 font-bold">
            <Link href="/blog" passHref>
              <a className="animated-link">Blog</a>
            </Link>
          </span>
          or
          <span className="mx-1 font-bold">
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
  );
};

export default IndexPage;
