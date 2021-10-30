// 상품 상세 페이지
import { withAuth } from "../../../src/components/commons/withAuth/withAuth";
import MarketDetailBoard from "../../../src/components/unit/market/detail/marketDetailBoard.container";

const MarketDetailPage = () => {
  return (
    <>
      <MarketDetailBoard />
    </>
  );
};

export default withAuth(MarketDetailPage);
