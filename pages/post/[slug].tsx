/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import { Params } from 'next/dist/server/router';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostDetail, CommentsForm, Comments, Sidebar } from 'components';
import { NodeDTO, PostDTO } from 'interfaces';
import { getPostDetails, getPosts } from 'services';

interface PostDetailsProps {
  post: PostDTO;
}

const PostDetails: NextPage<PostDetailsProps> = ({ post }) => (
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

export default PostDetails;

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
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: NodeDTO[] = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: NodeDTO) => ({ params: { slug } })),
    fallback: false
  };
};
