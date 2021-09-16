import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Page = styled.span`
  margin: 20px;
  cursor: pointer;
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { page: startPage },
  });

  const { data: dataBoardsCountano } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCountano?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }
  //   function onClickNextPage() {
  //     if (startPage + 10 <= lastPage)
  //     setStartPage((prev) => prev + 10);
  //   }
  // 09 16 12시 45분

  return (
    <>
      <div>페이지네이션(마지막페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>(이전)</span>
      {/* 리팩토링으로 하단 페이지네이션 하는 방법 */}
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}
      <span onClick={onClickNextPage}>(다음)</span>
    </>
  );
}
