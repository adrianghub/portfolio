import Link from "next/link";
import moment from "moment";
import { PostDTO } from "pages";

interface PostCardProps {
  post: PostDTO;
}

const PostCard = ({ post }: PostCardProps) => (
  <Link href={`/post/${post.slug}`}>
    <div className="shadow-lg rounded-lg lg:p-8 mb-8 p-4 cursor-pointer post-card-wrapper">
      <h1
        className="text-1xl md:text-2xl lg:text-3xl font-semibold mb-2
    "
      >
        {post.title}
      </h1>
      <div className="block lg:flex text-center items-center justify-center w-full">
        <div className="flex items-center justify-start mt-2 lg:mb-0 lg:mt-0 w-full mr-8">
          <img
            src={post.author.avatar.url}
            width="30px"
            height="30px"
            alt={post.author.name}
          />
          <p className="inline align-middle text-gray-700 ml-2 text-sm md:text-lg">
            {post.author.name}
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 ml-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="inline align-middle text-gray-700 text-sm md:text-lg">
              {moment(post.createdAt).format("MMMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default PostCard;
