import { getCategories, getPosts } from 'shared/services';
import { Categories, Posts } from 'modules/blog/components';
import { OneFourthLayout, Sidebar } from 'core/components';

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
        <>
          <Categories categories={categories} />
          <Sidebar postWidget />
        </>
      }
    />
  );
};

export default BlogPage;
