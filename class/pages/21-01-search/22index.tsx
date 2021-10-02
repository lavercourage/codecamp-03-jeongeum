import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 100px;
`;
const Page = styled.span`
  padding: 0px 20px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SearchPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }
  function onClickSearch() {
    refetch({ search: mySearch, page: 1 });
    setMyKeyword(mySearch);
  }
  function onClickPage(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }

  return (
    <>
      <div>검색 페이지</div>
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      <Wrapper>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt.slice(0, 10)}</Column>
          </div>
        ))}
      </Wrapper>
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
