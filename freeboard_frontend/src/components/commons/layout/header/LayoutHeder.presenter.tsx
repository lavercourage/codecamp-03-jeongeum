import {
  Wrapper,
  InnerWrapper,
  Logo,
  LogIn,
  SignIn,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <div>
          <LogIn>로그인</LogIn>
          <SignIn>회원가입</SignIn>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
