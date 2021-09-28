import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 600px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImg = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0px;
  background-color: turquoise;
  z-index: -1;
`;

export const BackgroundImgButton = styled.button`
  width: 200px;
  height: 100px;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
`;
