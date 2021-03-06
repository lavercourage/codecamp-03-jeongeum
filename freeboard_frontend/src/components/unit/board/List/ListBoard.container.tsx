import ListBoardUI from "./listBoard.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./listBoard.queries";
import { useState } from "react";

export default function ListBoard() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [activePage, setActivePage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage, search: keyword },
  });

  const { data: dataBoardsCountano } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search: keyword },
  });

  const lastPage = Math.ceil(dataBoardsCountano?.fetchBoardsCount / 10);

  function onClickBeforePage() {
    if (startPage === 1) return;
    setActivePage(startPage - 10);
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setActivePage(startPage + 10);
    setStartPage((prev) => prev + 10);
  }

  function onClickMovePage(event: any) {
    const activedPage = Number(event.target.id);
    setActivePage(activedPage);
    refetch({ page: Number(event.target.id) });
  }

  function onClickMoveToDetailBoard(event: any) {
    // router.push(`/boards/${event.target.id}`);
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickMoveToCreateBoard() {
    router.push(`/boards/create-board/`);
  }

  function onChangeKeyword(value: any) {
    setKeyword(value);
  }

  return (
    <ListBoardUI
      data={data}
      onClickMoveToDetailBoard={onClickMoveToDetailBoard}
      onClickMoveToCreateBoard={onClickMoveToCreateBoard}
      onClickMovePage={onClickMovePage}
      onClickBeforePage={onClickBeforePage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      setStartPage={setStartPage}
      lastPage={lastPage}
      activePage={activePage}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      count={dataBoardsCountano?.fetchBoardsCount}
    />
  );
}

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

// const password = prompt("??????????????? ???????????????.")

// const [deleteBoardano] = useMutation(DELETE_BOARD);

// async function onClickDelete(event) {
//   await deleteBoardano({
//     variables: { boardId: event.target.id },
//     refetchQueries: [{ query: FETCH_BOARDS }],
//   });
//   // console.log(password)
// }
