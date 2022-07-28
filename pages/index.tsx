import Head from 'next/head';
import { Loader } from 'components';
import { useRouter } from 'next/router';

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
    </div>
  );
};

export default IndexPage;
