import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($aaa: ID!) {
    fetchBoard(boardId: $aaa) {
      writer
      title
      contents
    }
  }
`;
// 언더패칭, 오버패칭

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      aaa: router.query.secondpage,
    },
  });

  return (
    <>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>
        내용 :
        {process.browser && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          />
        )}
        {/* {typeof window !== "undefined" && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            }}
          />
        )} */}
      </div>
    </>
  );
}
