import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/image/board/login/backgroundimg.jpg");
`;

export const ArrowDiv = styled.div`
  width: 1760px;
  height: 24px;
  margin-top: 80px;
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 1736px;
`;

export const Logo = styled.img`
  margin-top: 136px;
  width: 288px;
  height: 44px;
`;

export const LogInBoard = styled.div``;

export const InputEmail = styled.input`
  width: 384px;
  height: 64px;
  color: #ffffff;
  font-size: 16px;
  margin-top: 80px;
  padding-left: 16px;
  border: 1px solid #ffffff;
  background-color: transparent;
  border-radius: 16px;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const InputPassword = styled.input`
  width: 384px;
  height: 64px;
  color: #ffffff;
  font-size: 16px;
  margin-top: 20px;
  padding-left: 16px;
  border: 1px solid #ffffff;
  background-color: transparent;
  border-radius: 16px;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const InputError = styled.div`
  font-size: 14px;
  margin-top: 4px;
  margin-left: 16px;
  color: #8b0000;
`;

export const LogginIn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonWord = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin-left: 12px;
`;

export const LoginButton = styled.button`
  width: 384px;
  height: 64px;
  margin-top: 40px;
  color: ${(props) => (props.isActive ? "#000000" : "#ffffff")};
  font-size: 16px;
  text-align: center;
  background-color: ${(props) => (props.isActive ? "#FFD600" : "#4f4f4f")};
  border: none;
  border-radius: 16px;
`;

export const BottomBorder = styled.div`
  width: 384px;
  margin-top: 40px;
  border-top: 1px solid #ffffff;
  /* border: none; */
`;

export const BottomButton = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const SubButton = styled.div`
  margin: 0 10px;
  color: #ffffff;
  font-size: 14px;
`;
