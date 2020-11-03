import 'graphql-import-node';
import { resolvers } from './resolvers/index';
import { typeDefs } from './typeDefs';

const localServices = {
  authors: {
    schema: {
      typeDefs: typeDefs,
      resolvers: resolvers,
    },
  },
};

const remoteServices = {
  books: {
    url: 'http://localhost:5001/graphql',
  },
};

export const services = {
  ...localServices,
  ...remoteServices,
};
