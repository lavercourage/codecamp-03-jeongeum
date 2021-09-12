import DetailBoardUI from "./DetailBoard.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./DetailBoard.queries";

export default function DetailBoard() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.secondpage },
  });
  // 요 data를 왜 넣는거지..
  // 요 앞의 boardId는 FETCH_BOARD의 ID! => $boardId => boardId

  return <DetailBoardUI data={data} />;
}
