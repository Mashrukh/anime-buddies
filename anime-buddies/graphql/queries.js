import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
  query GetUsers {
    user {
      email_address
      first_name
      id
      last_name
      username
    }
  }
`;
