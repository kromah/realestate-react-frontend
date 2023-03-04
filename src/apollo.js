import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'https://realestate-strapi-project.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
