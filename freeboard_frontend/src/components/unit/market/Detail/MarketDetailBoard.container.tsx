import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailBoardUI from "./MarketDetailBoard.presenter";
import { FETCH_USED_ITEM } from "./MarketDetailBoard.queries";

export default function MarketDetailBoard() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketpage },
  });

  return <MarketDetailBoardUI data={data} />;
}
