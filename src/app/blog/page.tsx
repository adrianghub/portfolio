import { getPosts } from 'shared/services';
import { Posts } from 'modules/blog/components';
import { SeoWrapper } from 'shared/components';
import { OneFourthLayout, Sidebar } from 'core/components';

const seoData = {
  title: 'Blog | Adrian Zinko',
  description: 'Tech blog website'
};

const BlogPage = async () => {
  const posts = (await getPosts()) || [];

  return (
    <SeoWrapper {...seoData}>
      <OneFourthLayout
        childrenLeft={posts && <Posts posts={posts} />}
        childrenRight={<Sidebar postWidget />}
      />
    </SeoWrapper>
  );
};

export default BlogPage;
