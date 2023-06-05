import { serialize } from 'next-mdx-remote/serialize';
import { MdArrowBack } from 'react-icons/md';
import { getCategories, getPostDetails, getPosts } from '@/shared/services';
import { OneFourthLayout, Sidebar } from '@/core/components';
import {
  PostDetail,
  Comments,
  CommentsForm,
  PostWidget,
  Categories
} from '@/modules/blog/components';
import { NodeDTO } from '@/interfaces';
import { MDXContent } from '@/app/mdx-remote';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug + ' | Blog | Adrian Zinko'
  };
}

const PostDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostDetails(params.slug);
  const categories = await getCategories();

  const markdown = await serialize(post.content as string);

  return (
    <>
      <div className="flex justify-center items-center">
        <Link href="/blog">
          <MdArrowBack size={70} className="my-8" />
        </Link>

        <h1 className="text-center text-3xl sm:text-5xl lg:text-7xl font-semibold m-8 ">
          {post.title}
        </h1>
      </div>

      <OneFourthLayout
        childrenLeft={
          <>
            <div className="md:border md:border-gray-300 rounded-lg px-0 md:px-8 pt-8 pb-4 mb-8 ">
              <PostDetail post={post} />
              <article className="prose md:prose-lg lg:prose-xl max-w-none dark:prose-invert">
                <MDXContent markdown={markdown} />
              </article>
            </div>
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </>
        }
        childrenRight={
          <Sidebar>
            <Categories
              categories={categories}
              current={post.categories.map((category) => category.name)[0]}
            />
            <PostWidget
              slug={post.slug}
              categoriesSlugs={post.categories.map((category) => category.slug)}
            />
          </Sidebar>
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
