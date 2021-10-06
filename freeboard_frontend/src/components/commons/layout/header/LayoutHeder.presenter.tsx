import {
  Wrapper,
  InnerWrapper,
  Logo,
  LogIn,
  SignIn,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo id="/" onClick={props.onClickHeader} />
        <div>
          <LogIn id="/logIn" onClick={props.onClickHeader}>
            로그인
          </LogIn>
          {/* <LogInSuccess></LogInSuccess> */}
          <SignIn id="/signIn" onClick={props.onClickHeader}>
            회원가입
          </SignIn>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
