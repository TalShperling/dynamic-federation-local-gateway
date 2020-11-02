import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import cors from 'cors';
import { initiateFederationGateway } from './graphql/utils/gateway';
import { services } from './graphql/schema';

const app: Application = express();

const server: ApolloServer = new ApolloServer({
  gateway: initiateFederationGateway(services),
  validationRules: [depthLimit(7)],
  subscriptions: false,
  playground: true,
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 5000 }, (): void =>
  console.log(`GraphQL is now running on http://localhost:5000/graphql`)
);
