/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { GetStaticProps, GetStaticPaths } from 'next/types';
import { Params } from 'next/dist/server/router';
import { NodeDTO, PostCategory } from 'interfaces';
import { getCategories, getCategoryPosts } from 'services';
import { useRouter } from 'next/router';
import { Loader } from 'components/Loader';
import { PostCard, SeoWrapper, Sidebar } from 'components';
import { capitalizeFirstLetter } from 'util/capitalizeFirstLetter';

interface CategoryPostsProps {
  posts: NodeDTO[];
}

const CategoryPostsPage = ({ posts }: CategoryPostsProps) => {
  const { isFallback, asPath } = useRouter();
  const categoryName = capitalizeFirstLetter(asPath.split('/')[3]);

  return (
    <SeoWrapper
      title={`${categoryName} | Category | Adrian Zinko`}
      description={`Results for category: ${categoryName}`}
    >
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {isFallback ? (
            <Loader />
          ) : (
            <div className="col-span-1 lg:col-span-8">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
          )}
          <div className="col-span-1 lg:col-span-4 relative lg:sticky top-2 h-screen">
            <Sidebar />
          </div>
        </div>
      </div>
    </SeoWrapper>
  );
};

export default CategoryPostsPage;

export const getStaticProps: GetStaticProps<
  CategoryPostsProps,
  Params
> = async ({ params }) => {
  const posts = await getCategoryPosts(params?.slug);
  return {
    props: {
      posts
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories: PostCategory[] = await getCategories();

  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true
  };
};
