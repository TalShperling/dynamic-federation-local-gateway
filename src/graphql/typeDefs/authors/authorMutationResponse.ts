import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const authorMutationResponse: DocumentNode = gql`
  type AuthorMutationResponse {
    success: Boolean!
    message: String!
    authors: [Author!]
    author: Author
  }
`;
