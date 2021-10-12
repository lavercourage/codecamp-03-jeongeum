import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailBoardUI from "./MarketDetailBoard.presenter";
import { FETCH_USED_ITEM, ITEM_PICK } from "./MarketDetailBoard.queries";

export default function MarketDetailBoard() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketpage },
  });

  const [toggleUseditemPick] = useMutation(ITEM_PICK);

  const onClickPickItem = () => {
    toggleUseditemPick({
      variables: { useditemId: router.query.marketpage },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.marketpage },
        },
      ],
    });
  };

  const onClickMoveToList = () => {
    router.push(`/market/list-board`);
  };

  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.marketpage}/edit-board`);
  };

  console.log(data);

  return (
    <MarketDetailBoardUI
      data={data}
      onClickPickItem={onClickPickItem}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
