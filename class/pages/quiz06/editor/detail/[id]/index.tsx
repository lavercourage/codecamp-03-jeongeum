import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function QuizEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
  return (
    <>
      <div>writer : {data?.fetchBoard.writer}</div>
      <div>title : {data?.fetchBoard.title}</div>
      <div>
        contents :{" "}
        <div dangerouslySetInnerHTML={{ __html: data?.fetchBoard.contents }} />
      </div>
    </>
  );
}
