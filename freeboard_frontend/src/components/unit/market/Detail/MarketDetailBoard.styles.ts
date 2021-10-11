import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  /* padding: 80px 102px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: none; */
  /* box-shadow: 0 4px 20px gray; */
`;

export const TitleBar = styled.div`
  width: 792px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileData = styled.div`
  margin-left: 16px;
`;

export const Profile = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CreateAt = styled.div`
  font-size: 12px;
  color: #828282;
`;

export const TitleBarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Clip = styled.img`
  width: 20px;
`;
export const Location = styled.img`
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
`;

export const ContentBar = styled.div`
  width: 792px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const OneWrite = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const Product = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4f4f4f;
  margin-top: 4px;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProducPrice = styled.div`
  width: 792px;
  margin-top: 8px;
  font-size: 36px;
  font-weight: 700;
`;

export const PickItemIcon = styled(HeartFilled)`
  color: #ffd600;
  font-size: 30px;
  cursor: pointer;
`;

export const PickItemCount = styled.div`
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 4px;
`;

export const SlideImgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const SlideImg = styled.div`
  width: 384px;
  height: 384px;
  background-color: #888888;
`;

export const Aaa = styled.div`
  width: 384px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ThumbnailImg = styled.div`
  width: 78px;
  height: 78px;
  background-color: #888888;
`;

export const ContentsBox = styled.div`
  width: 792px;
  font-size: 18px;
  margin-top: 80px;
  /* overflow: hidden; */
  word-wrap: break-word;
`;

export const TagContent = styled.div`
  width: 792px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin: 60px 0;
  background-color: #888888;
`;

export const BottomButton = styled.div`
  margin-top: 20px;
`;

export const ToList = styled.button`
  width: 179px;
  height: 52px;
  margin: 0 12px;
  color: #4f4f4f;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background-color: #bdbdbd;
  border: none;
  cursor: pointer;
`;

export const ToEditBuy = styled.button`
  width: 179px;
  height: 52px;
  margin: 0 12px;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background-color: #ffd600;
  border: none;
  cursor: pointer;
`;

//공통 보더
export const Border = styled.div`
  width: 792px;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const Border2 = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
  margin-top: 80px;
  margin-bottom: 40px;
`;
