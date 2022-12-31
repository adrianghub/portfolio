/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import {
  Loader,
  Posts,
  SeoWrapper,
  Sidebar,
  OneFourthLayout
} from 'components';
import { NodeDTO } from 'interfaces';
import { getPosts } from 'services';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface IndexProps {
  posts: NodeDTO[];
}

const seoData = {
  title: 'Blog | Adrian Zinko',
  description: 'Tech blog website'
};

const BlogPage = ({ posts }: IndexProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <SeoWrapper {...seoData}>
      <OneFourthLayout
        childrenLeft={posts && <Posts posts={posts} />}
        childrenRight={<Sidebar />}
      />
    </SeoWrapper>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps<IndexProps, Params> = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
      fallback: true
    },
    revalidate: 60
  };
};
