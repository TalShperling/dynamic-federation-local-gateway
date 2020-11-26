import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const blaType: DocumentNode = gql`
  type Bla {
    episode: Episode @external
    category: Category @external
  }
`;
