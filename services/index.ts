import { request, gql } from "graphql-request";

const graphcmsAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {
  const query = gql`
    query GePosts {
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

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GePostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { slug });
  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GeRecentPosts() {
      posts(
      orderBy: createdAt_ASC
      last: 3
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

export const getSimilarPosts = async (
  slug: string,
  categoriesSlugs: string[]
) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { slug, categoriesSlugs });
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
