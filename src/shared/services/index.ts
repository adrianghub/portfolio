import { request, gql } from 'graphql-request';
import { CommentObjData, NodeDTO, PostCategory, PostDTO } from 'interfaces';

const graphcmsAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

export const getPosts = async (searchValue?: string): Promise<NodeDTO[]> => {
  const query = gql`
    query GetPosts($searchValue: String!) {
      postsConnection(
        orderBy: createdAt_DESC
        where: { title_contains: $searchValue }
      ) {
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
  `;

  const result = await request(graphcmsAPI, query, {
    searchValue: searchValue || ''
  });

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string): Promise<PostDTO> => {
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
        }
        createdAt
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

export const getCategoryPosts = async (
  categorySlug: string
): Promise<NodeDTO[]> => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      postsConnection(
        where: { categories_some: { slug: $slug } }
        orderBy: createdAt_DESC
      ) {
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
  `;

  const result = await request(graphcmsAPI, query, { slug: categorySlug });
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GeRecentPosts() {
      posts(
      orderBy: createdAt_DESC
      first: 3
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
        orderBy: createdAt_DESC
        first: 3
      ) {
        title
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphcmsAPI, query, {
    slug,
    categories: categoriesSlugs
  });

  return result.posts;
};

export const getCategories = async (): Promise<PostCategory[]> => {
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

export const getComments = async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { slug });
  return result.comments;
};

export const submitComment = async (commentObj: CommentObjData) => {
  const result = await fetch('/api/submitComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentObj)
  });

  return result.json();
};

export const subscribe = async ({
  name,
  email
}: {
  name?: string;
  email: string;
}) => {
  const result = await fetch(`/api/subscribe`, {
    body: JSON.stringify({
      name,
      email
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  return result.json();
};

export const checkout = async ({
  quantity,
  name
}: {
  quantity: number | null;
  name?: string;
}) => {
  const result = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quantity,
      name
    })
  });

  return result.json();
};
