import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const authorInputType: DocumentNode = gql`
  input AuthorInput {
    id: ID!
    firstName: String!
    lastName: String!
    books: [ID!]!
  }
`;
