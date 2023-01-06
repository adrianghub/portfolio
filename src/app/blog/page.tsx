import { getPosts } from 'shared/services';
import { Posts } from 'modules/blog/components';
import { OneFourthLayout, Sidebar } from 'core/components';

const POSTS_TO_LOAD = 6;

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <OneFourthLayout
      childrenLeft={
        posts && <Posts posts={posts} postsToLoad={POSTS_TO_LOAD} />
      }
      childrenRight={<Sidebar postWidget />}
    />
  );
};

export default BlogPage;
