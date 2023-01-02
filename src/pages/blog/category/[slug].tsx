import { GetStaticProps, GetStaticPaths } from 'next/types';
import { NodeDTO, PostCategory } from 'interfaces';
import { getCategories, getCategoryPosts } from 'shared/services';
import { useRouter } from 'next/router';
import { capitalizeFirstLetter } from 'shared/utils/capitalizeFirstLetter';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { OneFourthLayout, Sidebar } from 'core/components';
import { PostCard } from 'modules/blog/components';
import { SeoWrapper, Loader } from 'shared/components';

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
      <OneFourthLayout
        childrenLeft={
          isFallback ? (
            <Loader />
          ) : (
            <>
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </>
          )
        }
        childrenRight={<Sidebar postWidget />}
      />
    </SeoWrapper>
  );
};

export default CategoryPostsPage;

export const getStaticProps: GetStaticProps<
  CategoryPostsProps,
  Params
> = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const posts = await getCategoryPosts(params?.slug as string);
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
