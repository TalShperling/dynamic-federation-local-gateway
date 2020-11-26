import { GraphQLResolverMap } from 'apollo-graphql';
import { Resolvers } from '../../interfaces/types';
import { authorsQueries, authorsMutations, authorExternalResolvers } from './authorsResolvers';
import { bookExternalResolvers } from './booksResolvers';

export const resolvers: Resolvers<any> = {
  ...authorExternalResolvers,
  ...authorsQueries,
  ...authorsMutations,
  ...bookExternalResolvers,
};
