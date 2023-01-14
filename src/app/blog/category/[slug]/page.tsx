import { getCategories, getCategoryPosts } from 'shared/services';
import { OneFourthLayout, Sidebar } from 'core/components';
import { Categories, PostCard } from 'modules/blog/components';

const CategoryPostsPage = async ({ params }: { params: { slug: string } }) => {
  const posts = await getCategoryPosts(params.slug as string);
  const categories = await getCategories();

  const currentCategory = categories.find(
    (category) => category.slug === params.slug
  );

  return (
    <OneFourthLayout
      title={currentCategory?.name}
      childrenLeft={
        <>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </>
      }
      childrenRight={
        <>
          <Categories categories={categories} current={currentCategory?.name} />
          <Sidebar postWidget></Sidebar>
        </>
      }
    />
  );
};

export default CategoryPostsPage;

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map(({ slug, name }) => ({ slug, name }));
}
