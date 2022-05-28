import { PostDTO } from "interfaces";
import moment from "moment";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "services";

interface PostWidgetProps {
  categories: string[];
  slug: string;
}

const PostWidget = ({ categories, slug }: Partial<PostWidgetProps>) => {
  const [relatedPosts, setRelatedPosts] = useState<PostDTO[]>([]);

  useEffect(() => {
    if (slug) {
      // @ts-ignore
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    }

    getRecentPosts().then((result) => setRelatedPosts(result));
  }, [slug]);

  return (
    <div className="shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts &&
        relatedPosts.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="flex-grow">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format("MMMM DD, YYYY")}
              </p>
              <Link className="text-md" href={`/post/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostWidget;
