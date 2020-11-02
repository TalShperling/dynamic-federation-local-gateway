const { buildFederatedSchema } = require('@apollo/federation');
const { ApolloGateway, LocalGraphQLDataSource, RemoteGraphQLDataSource } = require('@apollo/gateway');

export const initiateFederationGateway = (services: any): typeof ApolloGateway => {
  // By providing a protocol we trick ApolloGateway into thinking that this is a valid URL;
  // otherwise it assumes it's a relative URL, and complains.
  const DUMMY_SERVICE_URL = 'https://';

  const gateway = new ApolloGateway({
    // We can't use localServiceList and serviceList at the same time,
    // so we pretend the local services are remote, but point the ApolloGateway
    // at LocalGraphQLDataSources instead...
    serviceList: Object.keys(services).map((name: any) => ({
      name,
      url: services[name].url || DUMMY_SERVICE_URL,
    })),
    buildService({ name, url }: { name: any; url: String }) {
      if (url === DUMMY_SERVICE_URL) {
        return new LocalGraphQLDataSource(buildFederatedSchema(services[name].schema));
      } else {
        return new RemoteGraphQLDataSource({ url });
      }
    },
  });

  return gateway;
};
