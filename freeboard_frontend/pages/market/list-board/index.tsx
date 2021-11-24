import MarketListBoard from "../../../src/components/unit/market/list/marketListBoard.container";
import { withAuth } from "../../../src/components/commons/withAuth/withAuth";

// 게시글 목록 페이지
const MarcketListPage = () => {
  return (
    <>
      <MarketListBoard />
    </>
  );
};
export default withAuth(MarcketListPage);
