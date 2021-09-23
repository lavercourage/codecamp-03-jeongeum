import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background-color: pink;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  height: 50px;
  width: 120px;
  background-color: yellowgreen;
`;

export const LogIn = styled.button`
  width: 90px;
  height: 45px;
  margin: 0px 10px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
`;

export const SignIn = styled.button`
  width: 90px;
  height: 45px;
  margin: 0px 10px;
  border-radius: 10px;
  background-color: #ffd600;
  border: none;
`;