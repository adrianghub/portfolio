import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

const graphcmsAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const graphQLClient = new GraphQLClient(graphcmsAPI, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN || ''}`
    }
  });

  const commentMutation = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(commentMutation, req.body);

    return res.status(201).send(result);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ name: 'An GraphCMS API error has occurred.' });
  }
}
