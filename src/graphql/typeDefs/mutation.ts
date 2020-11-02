import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const mutationType: DocumentNode = gql`
  extend type Mutation {
    createAuthor(authorToAdd: AuthorInput!): AuthorMutationResponse!
    updateAuthor(authorToUpdate: AuthorInput!): AuthorMutationResponse!
    deleteAuthor(authorIdToDelete: ID!): AuthorMutationResponse!
  }
`;
