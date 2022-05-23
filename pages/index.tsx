import Head from "next/head";
import { PostWidget, PostCard, Categories } from "../components";

const posts = [{ title: "React Testing" }, { title: "New Post" }];

const IndexPage = () => (
  <div className="container mx-auto px-10 mb-8">
    <Head>
      <title>Adrian Zinko | Blog</title>
    </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
