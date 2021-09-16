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

export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { page: startPage },
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div>다음페이지</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>(이전)</span>

      {/* 리팩토링 */}
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
      ))}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
        >
          {startPage + index}
        </Page>
        ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <Page key={el} onClick={onClickPage} id={String(el)}>
            {el}
          </Page> */}
      {/* // 같은 내용 9월 16일 12시 10분즈음부터 설명 듣기 */}

      <span onClick={onClickNextPage}>(다음)</span>
    </>
  );
}
