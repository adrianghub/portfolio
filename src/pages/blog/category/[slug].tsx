import { GetStaticProps, GetStaticPaths } from 'next/types';
import { NodeDTO, PostCategory } from 'interfaces';
import { getCategories, getCategoryPosts } from 'services';
import { useRouter } from 'next/router';
import {} from 'components/Loader';
import {
  PostCard,
  SeoWrapper,
  Sidebar,
  Loader,
  OneFourthLayout
} from 'components';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

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
        childrenRight={<Sidebar />}
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
