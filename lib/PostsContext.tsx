import { createContext, ReactNode } from "react";
import request from "graphql-request";
import useSWR from "swr";
import { NodeDTO } from "interfaces";
import { useSearchContext } from "hooks/useSearchContext";

interface PostsContextProps {
  posts: NodeDTO[] | undefined;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext<PostsContextProps | undefined>(
  undefined
);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const { searchValue } = useSearchContext();

  const { data } = useSWR(
    [
      process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "",
      `query PostQuery($searchValue: String) {
        postsConnection(orderBy: createdAt_DESC, where: {title_contains: $searchValue}) {
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
              }
              createdAt
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
    { revalidateOnFocus: true }
  );

  const posts = data?.postsConnection?.edges;

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};
