import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const TopBar = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductButton = styled.div`
  width: 1200px;
  display: flex;
  margin-top: 80px;
`;

export const ProductSoldButton = styled.div`
  height: 27px;
  margin-right: 20px;
  font-size: 18px;
  font-weight: ${(props) => (props.isSoldout ? 600 : 400)};
  border-bottom: ${(props) => (props.isSoldout ? "2px solid #ffd600" : "none")};
  cursor: pointer;
`;

export const ProductList = styled.div`
  overflow: auto;
  height: 1004px;
  width: 1200px;
`;

export const Border1 = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
`;

export const Border2 = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
`;

export const ProductItem = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const ListImg = styled.div``;

export const ThumbImg = styled.img`
  width: 160px;
  height: 160px;
`;

export const ThumbImgNone = styled.div`
  width: 160px;
  height: 160px;
  background-color: gray;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  padding-top: 58px;
`;

export const Data = styled.div`
  width: 700px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
`;

export const ProductName = styled.div`
  height: 36px;
  font-size: 24px;
`;

export const ProductRemarks = styled.div`
  height: 24px;
  color: #4f4f4f;
  font-size: 16px;
  margin-top: 4px;
`;

export const ProductTag = styled.div`
  height: 24px;
  color: #bdbdbd;
  font-size: 16px;
  margin-top: 8px;
`;

export const ProductSeller = styled.div`
  height: 24px;
  display: flex;
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

export const SellerProfileImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

export const SellerName = styled.div`
  color: #4f4f4f;
  font-size: 16px;
  margin-left: 4px;
`;

export const PickItemIcon = styled(HeartFilled)`
  color: #ffd600;
  font-size: 18px;
  margin-left: 20px;
`;

export const PickItemCount = styled.div`
  color: #4f4f4f;
  font-size: 16px;
  margin-left: 4px;
`;

export const ProductPriceData = styled.div`
  width: 300px;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const ProductWon = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ffd600;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 10px;
`;

export const ProductBuyButton = styled.button`
  width: 124px;
  height: 52px;
  margin-top: 40px;
  border: 1px solid #000000;
  background-color: #ffffff;
  font-size: 16px;
  margin-left: 1076px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 20px;
  margin-left: 200px; */
`;
