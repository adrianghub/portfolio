import { getCategories, getPosts } from '@/shared/services';
import { Categories, Posts, PostWidget } from '@/modules/blog/components';
import { OneFourthLayout, Sidebar } from '@/core/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Developer Portfolio | Adrian Zinko',
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
          <PostWidget />
        </Sidebar>
      }
    />
  );
};

export default BlogPage;
