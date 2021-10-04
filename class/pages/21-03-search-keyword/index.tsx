import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

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
  margin-right: 100px;
`;
const Column2 = styled.span`
  margin-right: 100px;
  color: orange;
`;
const Aaa = styled.input`
  margin: 0px 50px;
`;
const Page = styled.span`
  margin: 0 20px;
  cursor: pointer;
`;
// interface IProps {
//   isMatched: boolean;
// }
const Myword = styled.span`
  color: ${(props: any) => (props.isMatched ? "blue" : "black")};
`;

export default function SearchPage() {
  // const [mySearch, setMySearch] = useSt ate("");
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event) {
    getDebounce(event.target.value);
  }

  function onClickPage(event) {
    refetch({
      search: myKeyword,
      page: Number(event.target.id),
    });
  }

  return (
    <>
      <div>검색페이지</div>
      <Aaa type="text" onChange={onChangeSearch} />
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <Column>
            {el.title
              .replaceAll(myKeyword, `$%^${myKeyword}$%^`)
              .split("$%^")
              .map((el) => (
                <Myword key={uuidv4()} isMatched={myKeyword === el}>
                  {el}
                </Myword>
              ))}
          </Column>
          <Column2>{el.writer}</Column2>
          <Column>{el.createdAt.slice(0, 10)}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
