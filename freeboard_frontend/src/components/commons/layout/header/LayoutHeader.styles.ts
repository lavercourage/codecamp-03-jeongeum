import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2c5f2d;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-family: MontserratB;
  font-size: 32px;
  color: #97bc62;
  cursor: pointer;
`;

export const HeaderButton = styled.span`
  font-family: "SBAggroL";
  font-size: 16px;
  margin: 6px 0;
  padding: 6px 20px;
  color: #97bc62;
  cursor: pointer;
  :hover {
    color: #ffffff;
  }
`;

export const LoggeedIn = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderInfo = styled.span`
  font-family: "SBAggroL";
  font-size: 16px;
  margin: 6px 0;
  padding: 6px 20px;
  color: #97bc62;
`;

export const LogOut = styled.button`
  width: 90px;
  height: 45px;
  margin: 0px 10px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  cursor: pointer;
`;

export const MoneyAdd = styled.button`
  width: 90px;
  height: 45px;
  margin: 0px 10px;
  border-radius: 10px;
  color: #000000;
  background-color: #a2d6c6;
  border: none;
  cursor: pointer;
`;
