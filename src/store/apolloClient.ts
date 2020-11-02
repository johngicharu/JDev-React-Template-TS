import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const SERVER_BASE_URL = "http://localhost:5000/graphql";

const authHeader = () => {
  const access_token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem("access_token")!) : null;
  if (access_token) {
    return access_token;
  } else {
    return "";
  }
};

const httpLink = new HttpLink({
  uri: SERVER_BASE_URL,
  headers: {
    authorization: `Bearer ${authHeader()}`,
  },
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;