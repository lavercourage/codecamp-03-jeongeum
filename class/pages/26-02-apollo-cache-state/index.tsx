import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  // 아래 event에서 event 생략 가능
  const onClickDelete = (boardId) => async (event) => {
    // boardId
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 1. 기존의 fetchBoards 10개에서, 지금 삭제된 ID를 제외한 9개를 만들고,
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards를 return하여 덮어씌우기

              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...newFetchBoards];
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "일이삼",
          password: "사오육",
          title: "칠팔구",
          contents: "십십일십이",
        },
      },
      update(cache, result) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
              return [result.data.createBoard, ...prev];
              // return [...prev, result.data.createBoard,]; 새로운 게시물이 붙는 위치가 다르게 할 수도 있음
            },
          },
        });
      },
    });
  };

  return (
    <>
      <button onClick={onClickCreate}>등록하기</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
    </>
  );
}
