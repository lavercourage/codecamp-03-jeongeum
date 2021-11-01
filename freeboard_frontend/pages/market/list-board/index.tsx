import MarketListBoard from "../../../src/components/unit/market/list/marketListBoard.container";
import { withAuth } from "../../../src/components/commons/withAuth/withAuth";
// import IamPortBoard from "../../../src/components/commons/iamport/iamport";

// 게시글 목록 페이지
const MarcketListPage = () => {
  return (
    <>
      {/* <IamPortBoard /> */}
      <MarketListBoard />
    </>
  );
};
export default withAuth(MarcketListPage);
