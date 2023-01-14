import { serialize } from 'next-mdx-remote/serialize';
import { getCategories, getPostDetails, getPosts } from 'shared/services';
import { OneFourthLayout, Sidebar } from 'core/components';
import {
  PostDetail,
  Comments,
  CommentsForm,
  PostWidget,
  Categories
} from 'modules/blog/components';
import { NodeDTO } from 'interfaces';
import { MDXContent } from 'app/mdx-remote';

const PostDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostDetails(params.slug);
  const categories = await getCategories();

  const markdown = await serialize(post.content as string);

  return (
    <>
      <h1 className="text-center text-3xl sm:text-5xl font-semibold my-8">
        {post.title}
      </h1>
      <OneFourthLayout
        childrenLeft={
          <>
            <div className="border border-gray-300 rounded-lg p-8 pb-12 mb-8 mt-0 lg:mt-4">
              <div className="px-4 lg:px-0">
                <PostDetail post={post} />
                <MDXContent markdown={markdown} />
              </div>
            </div>
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </>
        }
        childrenRight={
          <>
            <Categories
              categories={categories}
              current={post.categories.map((category) => category.name)[0]}
            />
            <Sidebar>
              <PostWidget
                slug={post.slug}
                categoriesSlugs={post.categories.map(
                  (category) => category.slug
                )}
              />
            </Sidebar>
          </>
        }
      ></OneFourthLayout>
    </>
  );
};

export default PostDetailsPage;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ node: { slug } }: NodeDTO) => ({ slug }));
}
