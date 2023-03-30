import { getCategories, getCategoryPosts } from '@/shared/services';
import { OneFourthLayout, Sidebar } from '@/core/components';
import { Categories, PostCard, PostWidget } from '@/modules/blog/components';
import { Suspense } from 'react';
import { Loader } from '@/shared/components';

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
            <Suspense key={index} fallback={<Loader />}>
              <PostCard post={post.node} />
            </Suspense>
          ))}
        </>
      }
      childrenRight={
        <Sidebar>
          <Categories categories={categories} current={currentCategory?.name} />
          <PostWidget />
        </Sidebar>
      }
    />
  );
};

export default CategoryPostsPage;

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map(({ slug }) => ({ slug }));
}
