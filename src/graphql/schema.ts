import 'graphql-import-node';
import { resolvers } from './resolvers/index';
import { authorTypeDefs } from './typeDefs/authors';
import { bookTypeDefs } from './typeDefs/books';

const localServices = {
  authors: {
    schema: {
      typeDefs: [...authorTypeDefs, ...bookTypeDefs],
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
