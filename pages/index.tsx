import Head from "next/head";
import { Posts } from "components";
import type { GetStaticProps, NextPage } from "next";
import { getPosts } from "services";
import { Params } from "next/dist/server/router";
import { useSearchContext } from "hooks/useSearchContext";
import request from "graphql-request";
import useSWR from "swr";
import { NodeDTO } from "interfaces";
import Sidebar from "components/Sidebar";

interface IndexProps {
  posts: { postsConnection: { edges: NodeDTO[] } };
}

const IndexPage: NextPage<IndexProps> = ({ posts }) => {
  const { searchValue } = useSearchContext();

  const { data } = useSWR(
    [
      process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "",
      `query PostQuery($searchValue: String) {
        postsConnection(orderBy: createdAt_DESC, where: {title_contains: $searchValue}, first: 2) {
          edges {
            node {
              id
              author {
                bio
                name
                id
                avatar {
                  url
                }
                createdAt
              }
              slug
              title
              categories {
                name
                slug
                id
              }
            }
          }
        }
      }
    `,
      searchValue,
    ],
    (endpoint, query) => request(endpoint, query, { searchValue }),
    { revalidateOnFocus: true, fallbackData: posts }
  );

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>Adrian Zinko | Blog</title>
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Posts posts={data?.postsConnection?.edges!} />
          <div className="col-span-1 lg:col-span-4 relative lg:sticky top-0 h-screen">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IndexProps, Params> = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};
