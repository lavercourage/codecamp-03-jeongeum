import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
    }
  }
`;

// export const FETCH_BOARD = gql`
//   query fetchBoard {
//     _id
//     writer
//     title
//     contents
//   }
// `;

// mutation에서 000 (~~) 시작하는데 저 000은 그냥 이름일뿐 다른 요소와 연결되는게 없음 짜증!
// 괄호 정리 잘하자! 하나가 더 생기고 위치가 틀어지는 바람에 오류 뜸! 오타, 괄호 주의!!!!!!!
