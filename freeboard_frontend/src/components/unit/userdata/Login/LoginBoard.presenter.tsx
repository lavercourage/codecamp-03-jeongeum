import {
  Wrapper,
  ArrowDiv,
  Arrow,
  Logo,
  LogInBoard,
  InputEmail,
  InputPassword,
  InputError,
  LogginIn,
  Button,
  ButtonWord,
  LoginButton,
  BottomBorder,
  BottomButton,
  SubButton,
} from "./LoginBoard.styles";

export default function LoginBoardUI(props: any) {
  return (
    <Wrapper>
      {/* src="/image/board/login/backgroundimg.jpg" */}
      <ArrowDiv>
        <Arrow src="/image/board/login/ic_cancel.svg" />
      </ArrowDiv>
      <Logo src="/image/board/login/logo.svg" />
      <LogInBoard>
        <InputEmail
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={props.onChangeEmail}
        />
        <InputError>{props.emptyEmailError}</InputError>
        <InputPassword
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={props.onChangePassword}
        />
        <InputError>{props.emptyPasswordError}</InputError>
        <LogginIn>
          <Button
            src="/image/board/login/logging_in.svg"
            onClick={props.onClickLogginIn}
          />
          {/* onClick을 줘도 될거같긴한데 클릭 시 색이 변해야 하므로 고민좀 해보기 아마도 안트디자인 사용하지 않을까?*/}
          <ButtonWord>로그인 상태 유지</ButtonWord>
        </LogginIn>
      </LogInBoard>
      <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
      <BottomBorder />
      <BottomButton>
        <SubButton onClick={props.onClickFindEmail}>이메일 찾기</SubButton>
        <SubButton>|</SubButton>
        <SubButton onClick={props.onClickFindPassword}>비밀번호 찾기</SubButton>
        <SubButton>|</SubButton>
        <SubButton id="/signIn" onClick={props.onClickSignin}>
          회원가입
        </SubButton>
      </BottomButton>
    </Wrapper>
  );
}
