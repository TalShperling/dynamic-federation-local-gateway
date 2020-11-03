import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const queryType: DocumentNode = gql`
  extend type Query {
    author(authorId: ID!): Author
    authors: [Author]
  }
`;
