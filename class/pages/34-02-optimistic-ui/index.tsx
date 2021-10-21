import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUI() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "616cbd02b55052002a93c5fb",
    },
  });

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "616cbd02b55052002a93c5fb" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "616cbd02b55052002a93c5fb" },
      //   },
      // ], // 리패치 될 때까지 기다려야 함
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "616cbd02b55052002a93c5fb" },
          data: {
            fetchBoard: {
              _id: "616cbd02b55052002a93c5fb",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>👍 {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>👍 좋아요</button>
    </>
  );
}
