import { gql } from "@apollo/client";

export const LOGIN_BOARD = gql`
  mutation loginBoard($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
