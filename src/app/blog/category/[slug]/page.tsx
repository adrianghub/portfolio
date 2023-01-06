import { getCategories, getCategoryPosts } from 'shared/services';
import { OneFourthLayout, Sidebar } from 'core/components';
import { PostCard } from 'modules/blog/components';

const CategoryPostsPage = async ({ params }: { params: { slug: string } }) => {
  const posts = await getCategoryPosts(params.slug as string);

  return (
    <OneFourthLayout
      childrenLeft={
        <>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </>
      }
      childrenRight={<Sidebar postWidget />}
    />
  );
};

export default CategoryPostsPage;

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map(({ slug }) => ({ slug }));
}
