import { request, gql } from "graphql-request";

const graphcmsAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query GePostDetails {
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
    query GeRecentDetails() {
      posts(
      orderBy: createdAt_ASC
      last: 2
    ) {
      title
      createdAt
      slug
    }
    }
  `;

  const result = await request(graphcmsAPI, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 2
      ) {
        title
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphcmsAPI, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphcmsAPI, query);
  return result.categories;
};
