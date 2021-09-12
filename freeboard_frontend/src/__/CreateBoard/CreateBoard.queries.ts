import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation anynameokay($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
