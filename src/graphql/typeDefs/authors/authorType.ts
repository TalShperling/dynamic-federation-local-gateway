import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const authorType: DocumentNode = gql`
  type Author {
    id: ID!
    title: String!
    author: String!
    books: [Book]
  }
`;
