import 'graphql-import-node';
import { resolvers } from './resolvers/index';
import { typeDefs } from './typeDefs';

/**
 * The local schema which defined here in the gateway service.
 * You can arbitrarily decide which schema will be the local schema or the remote schema.
 */
const localServices = {
  authors: {
    schema: {
      typeDefs: typeDefs,
      resolvers: resolvers,
    },
  },
};

/**
 * The remote schema which defined in the implementing service.
 * You can arbitrarily decide which schema will be the local schema or the remote schema.
 */
const remoteServices = {
  books: {
    url: 'http://localhost:5001/graphql',
  },
};

export const services = {
  ...localServices,
  ...remoteServices,
};
