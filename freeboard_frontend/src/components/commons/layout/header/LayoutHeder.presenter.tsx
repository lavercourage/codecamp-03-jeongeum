import {
  Wrapper,
  InnerWrapper,
  Logo,
  LogIn,
  SignIn,
  LoggeedIn,
  UserInfo,
  LogOut,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  console.log("유저정보: ", props);
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo id="/" onClick={props.onClickHeader} />
        <div>
          {!props.data?.fetchUserLoggedIn.name && (
            <>
              <LogIn id="/logIn" onClick={props.onClickHeader}>
                로그인
              </LogIn>
              <SignIn id="/signIn" onClick={props.onClickHeader}>
                회원가입
              </SignIn>
            </>
          )}
          {props.data?.fetchUserLoggedIn.name && (
            <LoggeedIn>
              <UserInfo id="/mypage" onClick={props.onClickHeader}>
                {props.data?.fetchUserLoggedIn.name} 님
              </UserInfo>
              <LogOut onClick={props.onClickLogOut}>로그아웃</LogOut>
              <SignIn>
                잔액: {props.data?.fetchUserLoggedIn?.userPoint?.amount}원
              </SignIn>
              <SignIn onClick={props.removeToken}>TKRM</SignIn>
            </LoggeedIn>
          )}
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
