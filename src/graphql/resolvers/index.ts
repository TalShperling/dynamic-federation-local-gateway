import { GraphQLResolverMap } from 'apollo-graphql';
import { authorsQueries, authorsMutations, authorExternalResolvers } from './authorsResolvers';

export const resolvers: GraphQLResolverMap<any> = {
  ...authorExternalResolvers,
  ...authorsQueries,
  ...authorsMutations,
};
