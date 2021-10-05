import { gql } from "@apollo/client";

export const LOGIN_BOARD = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

// export const LOGIN_BOARD = gql`
//   mutation loginBoard($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       accessToken
//     }
//   }
// `;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
