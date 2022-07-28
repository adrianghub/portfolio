/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { GetStaticProps, GetStaticPaths } from 'next/types';
import { Params } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  PostDetail,
  CommentsForm,
  Comments,
  Sidebar,
  Loader,
  CodeBlock
} from 'components';
import { NodeDTO, PostDTO } from 'interfaces';
import { getPostDetails, getPosts } from 'services';
import { HTMLAttributes, ImgHTMLAttributes, LiHTMLAttributes } from 'react';

interface PostDetailsProps {
  post: PostDTO;
}

const components = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl pt-12 pb-6" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl pt-6" {...props} />
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-xl pt-6" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-md sm:text-lg text-gray-900 leading-relaxed py-3"
      {...props}
    />
  ),
  li: (props: LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-md sm:text-lg leading-relaxed ml-4 py-3" {...props} />
  ),
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-lg shadow-lg mx-auto my-3" {...props} />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: HTMLAttributes<HTMLPreElement> & any) => <CodeBlock {...props} />
};

const PostDetailsPage = ({ post }: PostDetailsProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="px-4 lg:px-0">
              <PostDetail post={post} />
              <MDXRemote
                {...(post.content as MDXRemoteSerializeResult<
                  Record<string, unknown>
                >)}
                components={components}
              />
            </div>
          </div>
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4 relative lg:sticky top-2 h-screen">
          <Sidebar
            slug={post.slug}
            categoriesSlugs={post.categories.map((category) => category.slug)}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;

export const getStaticProps: GetStaticProps<PostDetailsProps, Params> = async ({
  params
}) => {
  const post: PostDTO = await getPostDetails(params?.slug);

  const markdown: MDXRemoteSerializeResult<Record<string, unknown>> =
    await serialize(post.content as string);

  return {
    props: {
      post: {
        ...post,
        content: markdown
      }
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: NodeDTO[] = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: NodeDTO) => ({ params: { slug } })),
    fallback: true
  };
};
