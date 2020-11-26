import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const bookType: DocumentNode = gql`
  extend type Book @key(fields: "id") {
    id: ID! @external
    authors: [Author]
    bla: Bla
  }
`;
