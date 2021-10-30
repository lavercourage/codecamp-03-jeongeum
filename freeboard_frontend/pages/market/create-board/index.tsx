// 상품 등록 페이지
import { withAuth } from "../../../src/components/commons/withAuth/withAuth";
import MarketCreateBoard from "../../../src/components/unit/market/write/marketWriteBoard.container";

const MarketCreatePage = () => {
  return <MarketCreateBoard isEdit={false} />;
};

export default withAuth(MarketCreatePage);
