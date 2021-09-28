import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;
export const Wrapper = styled.div`
  width: 1200px;
  margin: 120px;
  padding: 80px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0 4px 20px gray;
  /* background-color: beige; */
`;
export const TitleBar = styled.div`
  width: 996px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleBarLeft = styled.div`
  display: flex;
`;
export const Profile = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
export const CreateDt = styled.div`
  font-size: 16px;
  color: #828282;
`;
export const TitleBarRight = styled.div`
  display: flex;
`;
export const Clip = styled.img`
  width: 26px;
`;
export const Location = styled.img`
  height: 26px;
  margin-left: 20px;
`;
export const Line = styled.div`
  width: 996px;
  margin: 20px 0 0 0;
  border-bottom: solid 1px #bdbdbd;
`;
export const Title = styled.div`
  width: 996px;
  margin-top: 80px;
  font-size: 36px;
  font-weight: bold;
`;
export const Content = styled.div`
  width: 996px;
  margin-top: 40px;
  font-size: 16px;
`;
export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
`;
export const ProfileData = styled.div`
  margin-left: 16px;
`;

export const MainImg = styled.img`
  width: 996px;
  margin-top: 40px;
`;
export const Video = styled.img`
  width: 486px;
  margin-top: 120px;
`;
export const Recommand = styled.div`
  width: 120px;
  margin-top: 160px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LikeImg = styled.img`
  width: 22px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  color: #ffd600;
`;
export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DislikeImg = styled.img`
  width: 20px;
  cursor: pointer;
`;
export const DislikeCount = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
  color: #828282;
`;
export const ThreeButton = styled.div`
  /* width: 585px; */
  display: flex;
  /* justify-content: space-between; */
`;
export const ToList = styled.button`
  width: 179px;
  height: 45px;
  margin: 0 12px 0 12px;
  /* background-color: ${(props) =>
    props.qqq === true ? "#FFD600" : "#bdbdbd"}; */
  background-color: white;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
  padding: 0;
  cursor: pointer;
`;
export const ToEdit = styled.button`
  width: 179px;
  height: 45px;
  margin: 0 12px 0 12px;
  /* background-color: ${(props) =>
    props.qqq === true ? "#FFD600" : "#bdbdbd"}; */
  background-color: white;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
  padding: 0;
  cursor: pointer;
`;
export const ToDelete = styled.button`
  width: 179px;
  height: 45px;
  margin: 0 12px 0 12px;
  /* background-color: ${(props) =>
    props.qqq === true ? "#FFD600" : "#bdbdbd"}; */
  background-color: white;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
  padding: 0;
  cursor: pointer;
`;
