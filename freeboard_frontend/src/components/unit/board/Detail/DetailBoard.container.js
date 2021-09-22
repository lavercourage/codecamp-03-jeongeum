import DetailBoardUI from "./DetailBoard.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./DetailBoard.queries";

export default function DetailBoard() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.secondpage },
  });
  // 요 data를 왜 넣는거지..
  // 요 앞의 boardId는 FETCH_BOARD의 ID! => $boardId => boardId

  function onClickMoveToList() {
    router.push(`/boards/list-board`);
  }

  function onClickMoveToEdit() {
    router.push(`/boards/${router.query.secondpage}/edit`);
  }

  async function onClickMoveToDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.secondpage } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards/list-board");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <DetailBoardUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToDelete={onClickMoveToDelete}
    />
  );
}
