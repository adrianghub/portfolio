import { PostDTO } from "interfaces";

interface PostDetailProps {
  post: PostDTO;
}

const PostDetail = ({ post }: PostDetailProps) => {
  console.log(post);

  return <div>postdetails</div>;
};

export default PostDetail;
