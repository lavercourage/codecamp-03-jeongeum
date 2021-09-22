// 수정페이지
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/unit/board/Write/WriteBoard.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.secondpage },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
