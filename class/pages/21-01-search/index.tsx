import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
  margin: 0px 100px;
`;
const Aaa = styled.input`
  margin: 0px 50px;
`;
const Bbb = styled.button`
  margin: 0px 50px;
`;

export default function SearchPage() {
  const [mySearch, setMySearch] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }
  function onClickSearch() {
    refetch({ search: mySearch });
  }
  return (
    <>
      <div>검색페이지</div>
      <Aaa type="text" onChange={onChangeSearch} />
      <Bbb onClick={onClickSearch}>검색</Bbb>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt.slice(0, 10)}</Column>
        </div>
      ))}
    </>
  );
}
