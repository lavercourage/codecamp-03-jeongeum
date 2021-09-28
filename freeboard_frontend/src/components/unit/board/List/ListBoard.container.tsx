import ListBoardUI from "./ListBoard.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./ListBoard.queries";

export default function ListBoard() {
  const router = useRouter();

  // const { data } = useQuery(FETCH_BOARDS, {
  //   variables: { boardId: router.query.secondpage },
  // });

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickMovePage(event: any) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickMoveToDetailBoard(event: any) {
    router.push(`/boards/${event.target.id}`);
  }

  function onClickMoveToCreateBoard() {
    router.push(`/boards/create-board/`);
  }

  return (
    <ListBoardUI
      data={data}
      onClickMoveToDetailBoard={onClickMoveToDetailBoard}
      onClickMoveToCreateBoard={onClickMoveToCreateBoard}
      onClickMovePage={onClickMovePage}
    />
  );
}

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

// const password = prompt("비밀번호를 입력하세요.")

// const [deleteBoardano] = useMutation(DELETE_BOARD);

// async function onClickDelete(event) {
//   await deleteBoardano({
//     variables: { boardId: event.target.id },
//     refetchQueries: [{ query: FETCH_BOARDS }],
//   });
//   // console.log(password)
// }
