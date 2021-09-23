// 글목록페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
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

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

const List = styled.div`
  width: 1200px;
  margin-top: 80px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  :hover {
    color: #8b0000;
  }
  cursor: pointer;
`;

const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;
const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
`;
const ColumnWriter = styled.div`
  width: 15%;
  text-align: center;
`;
const ColumnUpDate = styled.div`
  width: 15%;
  text-align: center;
`;
const Row2 = styled.div`
  display: flex;
  background-color: red;
  padding: 10px 0;
  :hover {
    color: #8b0000;
  }
  cursor: pointer;
`;
const Number = styled.div`
  width: 10%;
  color: white;
  font-weight: bold;
  text-align: center;
  /* :hover {
    color: #8B0000;
  } */
`;
const Title = styled.div`
  width: 60%;
  color: white;
  font-weight: bold;
  text-align: center;
  /* :hover {
    color: #8B0000;
  } */
`;
const Writer = styled.div`
  width: 15%;
  color: white;
  font-weight: bold;
  text-align: center;
`;
const UpDate = styled.div`
  width: 15%;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.div`
  width: 171px;
  height: 52px;
  padding: 18px;
  font-size: 16px;
  text-align: center;
  border: solid 1px #f2f2f2;
  border-radius: 10px;
`;
// const password = prompt("비밀번호를 입력하세요.")

export default function ListPage() {
  // const [deleteBoardano] = useMutation(DELETE_BOARD);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { boardId: router.query.secondpage },
  });

  function onClickMoveToDetailBoard(event) {
    router.push(`/boards/${event.target.id}`);
  }

  function onClickMoveToCreateBoard() {
    router.push(`/boards/create-board/`);
  }
  // async function onClickDelete(event) {
  //   await deleteBoardano({
  //     variables: { boardId: event.target.id },
  //     refetchQueries: [{ query: FETCH_BOARDS }],
  //   });
  //   // console.log(password)
  // }

  return (
    <div>
      <List>
        <Row2>
          {/* <Top>
            <input type="checkbox" />
          </Top> */}
          <Number>번호</Number>
          <Title>제목</Title>
          <Writer>작성자</Writer>
          {/* <Top>내용</Top> */}
          <UpDate>작성일</UpDate>
        </Row2>

        {data?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            {/* <Column>
              <input type="checkbox" />
            </Column> */}
            <ColumnNumber>{10 - index}</ColumnNumber>
            <ColumnTitle id={el._id} onClick={onClickMoveToDetailBoard}>
              {el.title}
            </ColumnTitle>
            <ColumnWriter>{el.writer}</ColumnWriter>
            {/* <Column>{el.contents}</Column> */}
            <ColumnUpDate>{el.createdAt.slice(0, 10)}</ColumnUpDate>
            {/* <Column>
              <button id={el._id} onClick={onClickDelete}>
                삭제하기
              </button>
            </Column> */}
          </Row>
        ))}
        <Button onClick={onClickMoveToCreateBoard}>게시글 등록하기</Button>
      </List>
    </div>
  );
}
