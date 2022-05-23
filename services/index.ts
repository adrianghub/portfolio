import { request, gql } from "graphql-request";

const graphcmsAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query PostQuery {
      postsConnection {
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
  `;

  const result = await request(graphcmsAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      createdAt
      slug
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result.posts;
};
