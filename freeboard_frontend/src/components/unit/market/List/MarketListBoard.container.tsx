import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketListBoardUI from "./marketListBoard.presenter";
import { FETCH_USED_ITEMS } from "./marketListBoard.queries";

export default function MarketListBoard() {
  const router = useRouter();
  const [isSoldout, setIsSoldout] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: isSoldout,
      page: 1,
      search: keyword,
    },
  });

  // const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
  //   variables: {
  //     isSoldout: false,
  //     page: 1,
  //   },
  // });

  function onLoadMore() {
    if (!data) {
      return;
    }

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  function onClickMoveProduct(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  const onClickProductRegister = () => {
    router.push(`/market/create-board`);
  };

  const onClickSelling = () => {
    setIsSoldout(false);
  };

  const onClickSoldout = () => {
    setIsSoldout(true);
  };

  const onChangeKeyword = (value: any) => {
    setKeyword(value);
  };

  return (
    <MarketListBoardUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveProduct={onClickMoveProduct}
      onClickProductRegister={onClickProductRegister}
      isSoldout={isSoldout}
      onClickSelling={onClickSelling}
      onClickSoldout={onClickSoldout}
      //검색기능
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
    />
  );
}

// function onLoadMore() {
//     if (!data) return;

//     fetchMore({
//       variables: {
//         page: Math.ceil(Number(data?.fetchUseditems.length) / 10),
//       },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         return {
//           fetchUseditems: [
//             ...prev.fetchUseditems,
//             ...fetchMoreResult.fetchUseditems,
//           ],
//         };
//       },
//     });
//   }
