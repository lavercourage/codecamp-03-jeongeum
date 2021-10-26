// import { FETCH_BOARD_COMMENTS } from "./CommentListBoard.queries";
// import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import CommentListUI from "./CommentListBoard.presenter";

// export default function CommentList() {
//   const router = useRouter();
//   const { data } = useQuery(FETCH_BOARD_COMMENTS, {
//     variables: { boardId: router.query.id },
//   });

//   return <CommentListUI data={data} />;
// }

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./commentListBoard.presenter";
import { FETCH_BOARD_COMMENTS } from "./commentListBoard.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.secondpage },
  });

  // function onLoadMore() {
  //   if (!data) return;

  //   fetchMore({
  //     variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       return {
  //         fetchBoardComments: [
  //           ...prev.fetchBoardComments,
  //           ...fetchMoreResult.fetchBoardComments,
  //         ],
  //       };
  //     },
  //   });
  // }

  return <BoardCommentListUI data={data} />;
}
// onLoadMore={onLoadMore}
