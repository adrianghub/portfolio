import { getCategories, getCategoryPosts } from '@/lib/graphql-requests';
import { OneFourthLayout, Sidebar } from '@/components';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { Loader } from '@/components/ui';
import { Categories, PostWidget } from '@/components/blog';
import { PostCard } from '@/components/blog/PostCard';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug + ' | Category | Adrian Zinko'
  };
}

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
        <Sidebar>
          <Categories categories={categories} current={currentCategory?.name} />
          <Suspense fallback={<Loader />}>
            {/* @ts-expect-error  Promise<JSX.Element> */}
            <PostWidget />
          </Suspense>
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
