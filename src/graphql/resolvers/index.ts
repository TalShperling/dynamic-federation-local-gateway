import { GraphQLResolverMap } from 'apollo-graphql';
import { authorsQueries, authorsMutations, authorExternalResolvers } from './authorsResolvers';
import { bookExternalResolvers } from './booksResolvers';

export const resolvers: GraphQLResolverMap<any> = {
  ...authorExternalResolvers,
  ...authorsQueries,
  ...authorsMutations,
  ...bookExternalResolvers,
};
