import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListBoardUI from "./MarketListBoard.presenter";
import { FETCH_USED_ITEMS } from "./MarketListBoard.queries";

export default function MarketListBoard() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false,
      page: 1,
    },
  });

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

  return (
    <MarketListBoardUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveProduct={onClickMoveProduct}
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
