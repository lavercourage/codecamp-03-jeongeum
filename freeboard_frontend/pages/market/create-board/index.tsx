// 상품 등록 페이지
import { withAuth } from "../../../src/components/commons/withAuth/withAuth";
import MarketCreateBoard from "../../../src/components/unit/market/Write/MarketWriteBoard.container";

const MarketCreatePage = (props: any) => {
  return <MarketCreateBoard isEdit={false} />;
};

export default withAuth(MarketCreatePage);
