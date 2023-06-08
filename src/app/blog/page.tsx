import { Metadata } from 'next';
import { getCategories, getPosts } from '@/lib/graphql-requests';
import { OneFourthLayout, Sidebar } from '@/components';
import { Categories, PostWidget } from '@/components/blog';
import { Posts } from '@/components/blog/Posts';

export const metadata: Metadata = {
  title: 'Blog | Developer Portfolio | Adrian Zinko'
};

export const revalidate = 60;

const POSTS_TO_LOAD = 6;

const BlogPage = async () => {
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <OneFourthLayout
      title="Blog"
      childrenLeft={
        posts && <Posts posts={posts} postsToLoad={POSTS_TO_LOAD} />
      }
      childrenRight={
        <Sidebar>
          <Categories categories={categories} />
          {/* @ts-expect-error  Promise<JSX.Element> */}
          <PostWidget />
        </Sidebar>
      }
    />
  );
};

export default BlogPage;
