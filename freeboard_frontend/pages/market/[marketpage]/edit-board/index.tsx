// 상품 수정 페이지
import { withAuth } from "../../../../src/components/commons/withAuth/withAuth";
import { useRouter } from "next/router";
import MarketCreateBoard from "../../../../src/components/unit/market/Write/MarketWriteBoard.container";
import { useQuery, gql } from "@apollo/client";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      buyer {
        name
      }
      seller {
        name
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const MarketCreatePage = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketpage },
  });

  return <MarketCreateBoard isEdit={true} data={data} />;
};

export default withAuth(MarketCreatePage);
