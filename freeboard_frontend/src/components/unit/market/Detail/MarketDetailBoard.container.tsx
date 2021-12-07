import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import MarketDetailBoardUI from "./marketDetailBoard.presenter";
import {
  FETCH_USED_ITEM,
  ITEM_PICK,
  DELETE_USED_ITEM,
  FETCH_USER_LOGGEDIN,
  CREATE_POINT_TRANS_ACTION_Of_BUYING_AND_SELLING,
} from "./marketDetailBoard.queries";

export default function MarketDetailBoard() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketpage },
  });
  const { data: fetchUserLoggedIn } = useQuery(FETCH_USER_LOGGEDIN);
  // 구조분해할당 다시 공부해놓기
  // data를 불러올 때, 지정하는 값과 해당 안에 있는 내용을 불러오는??
  // 배열과 객체에서의 구조분해할당 복습하기!
  // 구조분해할당, 오늘 본 상품 보여주기 만들기 (12/8)

  const [toggleUseditemPick] = useMutation(ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANS_ACTION_Of_BUYING_AND_SELLING
  );

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

  const onClickDeleteItem = async (event: any) => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.marketpage },
      });
      alert("삭제완료!");
      router.push(`/market/list-board`);
    } catch (error) {
      alert("본인의 글만 삭제할 수 있습니다!");
      console.log("삭제하기: ", error);
    }
  };

  const onClickMoveToBuy = () => {
    try {
      createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.marketpage,
        },
      });
      alert("구매완료");
    } catch (error) {
      alert(error);
    }
  };

  console.log(data);

  return (
    <MarketDetailBoardUI
      data={data}
      onClickPickItem={onClickPickItem}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteItem={onClickDeleteItem}
      fetchUserLoggedIn={fetchUserLoggedIn}
      onClickMoveToBuy={onClickMoveToBuy}
    />
  );
}
