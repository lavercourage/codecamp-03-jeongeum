import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/image/board/login/backgroundimg.jpg");
`;

export const CancleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 80px 80px 0 80px;
  /* background-color: red; */
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 1736px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  width: 384px;
  color: #ff0000;
  font-size: 14px;
  margin-top: 8px;
  padding-left: 16px;
`;
