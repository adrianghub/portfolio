import { GetStaticProps, GetStaticPaths, NextPage } from "next/types";
import { PostDetail, CommentsForm, Comments, Sidebar } from "components";
import { NodeDTO, PostDTO } from "interfaces";
import { Params } from "next/dist/server/router";
import { getPostDetails, getPosts } from "services";

interface PostDetailsProps {
  post: PostDTO;
}

const PostDetails: NextPage<PostDetailsProps> = ({ post }) => (
  <div className="container mx-auto px-10 mb-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="col-span-1 lg:col-span-8">
        <PostDetail post={post} />
        <CommentsForm />
        <Comments />
      </div>
      <div className="col-span-1 lg:col-span-4 relative lg:sticky top-0 h-screen">
        <Sidebar
          slug={post.slug}
          categoriesSlugs={post.categories.map(category => category.slug)}
        />
      </div>
    </div>
  </div>
);

export default PostDetails;

export const getStaticProps: GetStaticProps<PostDetailsProps, Params> = async ({
  params,
}) => {
  const post = await getPostDetails(params?.slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: NodeDTO) => ({ params: { slug } })),
    fallback: false
  }
}