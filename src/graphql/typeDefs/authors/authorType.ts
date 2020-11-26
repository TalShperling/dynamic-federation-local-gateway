import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const authorType: DocumentNode = gql`
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    books: [Book!]!
  }

  type AuthorBeforeFederate {
    id: ID!
    firstName: String!
    lastName: String!
    books: [ID!]!
  }
`;
