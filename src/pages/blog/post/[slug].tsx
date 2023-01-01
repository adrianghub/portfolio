import { GetStaticProps, GetStaticPaths } from 'next/types';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NodeDTO, PostDTO } from 'interfaces';
import { getPostDetails, getPosts } from 'shared/services';
import { HTMLAttributes, ImgHTMLAttributes, LiHTMLAttributes } from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { OneFourthLayout, Sidebar } from 'core/components';
import { Loader, SeoWrapper } from 'shared/components';
import {
  CodeBlock,
  PostDetail,
  Comments,
  CommentsForm,
  PostWidget
} from 'modules/blog/components';

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
  a: (props: HTMLAttributes<HTMLAnchorElement>) => (
    <a className="animated-link leading-relaxed" {...props} />
  ),
  li: (props: LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-md sm:text-lg leading-relaxed ml-4 py-3" {...props} />
  ),
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-lg shadow-lg mx-auto my-3" {...props} />
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (props: any) => <CodeBlock {...props} />
};

const PostDetailsPage = ({ post }: PostDetailsProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loader />;
  }

  return (
    <OneFourthLayout
      childrenLeft={
        <>
          <div className="shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="px-4 lg:px-0">
              <SeoWrapper
                title={`${post.title} | Adrian Zinko`}
                description={post.rawContent.slice(0, 60)}
              >
                <PostDetail post={post} />
                <MDXRemote
                  {...(post.content as MDXRemoteSerializeResult<
                    Record<string, unknown>
                  >)}
                  components={components}
                />
              </SeoWrapper>
            </div>
          </div>
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </>
      }
      childrenRight={
        <Sidebar>
          <PostWidget
            slug={post.slug}
            categoriesSlugs={post.categories.map((category) => category.slug)}
          />
        </Sidebar>
      }
    ></OneFourthLayout>
  );
};

export default PostDetailsPage;

export const getStaticProps: GetStaticProps<PostDetailsProps, Params> = async ({
  params
}: Params) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const post = await getPostDetails(params?.slug as string);

  const markdown: MDXRemoteSerializeResult<Record<string, unknown>> =
    await serialize(post.content as string);

  return {
    props: {
      post: {
        ...post,
        content: markdown,
        rawContent: post.content as string
      }
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: NodeDTO) => ({ params: { slug } })),
    fallback: true
  };
};
