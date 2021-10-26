import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  height: 1080px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/image/board/login/backgroundimg.jpg");
`;

export const CancleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* background-color: red; */
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 60px;
  margin-bottom: 20px;
`;
