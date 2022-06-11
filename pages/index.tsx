/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from 'next/head';
import { Posts } from 'components';
import type { GetStaticProps, NextPage } from 'next';
import Sidebar from 'components/Sidebar';
import { NodeDTO } from 'interfaces';
import { Params } from 'next/dist/server/router';
import { getPosts } from 'services';

interface IndexProps {
  posts: NodeDTO[];
}

const IndexPage: NextPage<IndexProps> = ({ posts }) => (
  <div className="container mx-auto px-10 mb-8">
    <Head>
      <title>Adrian Zinko | Blog</title>
    </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {posts && <Posts posts={posts} />}
      <div className="col-span-1 lg:col-span-4 relative lg:sticky top-2 h-screen">
        <Sidebar />
      </div>
    </div>
  </div>
);

export default IndexPage;

export const getStaticProps: GetStaticProps<IndexProps, Params> = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts
    }
  };
};
