import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./commentListBoard.presenter";
import { FETCH_BOARD_COMMENTS } from "./commentListBoard.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.secondpage },
  });

  return <BoardCommentListUI data={data} />;
}
