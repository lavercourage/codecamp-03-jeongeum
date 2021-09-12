// 글목록페이지

import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
`;

const Column = styled.div`
  width: 20%;
`;

const Row2 = styled.div`
  display: flex;
  background-color: red;
  padding: 10px 0;
`;
const Top = styled.div`
  width: 20%;
  color: white;
  font-weight: bold;
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
// const password = prompt("비밀번호를 입력하세요.")

export default function ListPage() {
  const [deleteBoardano] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  async function onClickDelete(event) {
    await deleteBoardano({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    // console.log(password)
  }

  return (
    <div>
      <Row2>
        <Top>
          <input type="checkbox" />
        </Top>
        <Top>제목</Top>
        <Top>작성자</Top>
        <Top>내용</Top>
        <Top>작성일</Top>
        <Top>삭제하기</Top>
      </Row2>

      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
