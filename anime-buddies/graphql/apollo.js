import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

export const withApollo = () => {
  function createApolloClient(authToken) {
    return new ApolloClient({
      link: new HttpLink({
        uri: "https://patient-cat-52.hasura.app/v1/graphql",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }),
      cache: new InMemoryCache(),
    });
  }
  return {
    createApolloClient,
  };
};
