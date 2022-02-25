import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 1080px;
  /* background-color: #f0d158; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/image/board/login/backgroundimg.jpg");
`;

export const TitleContent = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
`;

export const BodyContent = styled.span`
  font-size: 24px;
  color: white;
`;

export const BackgroundImg = styled.div`
  background-color: turquoise;
`;

export const BackgroundImgButton = styled.button`
  width: 400px;
  height: 60px;
  margin-top: 40px;
  border: 1px solid #000000;
  font-size: 18px;
  cursor: pointer;
`;
