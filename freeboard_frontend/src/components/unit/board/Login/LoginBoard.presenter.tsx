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

export default function LoginBoardUI() {
  return (
    <Wrapper>
      {/* src="/image/board/login/backgroundimg.jpg" */}
      <ArrowDiv>
        <Arrow src="/image/board/login/ic_cancel.svg" />
      </ArrowDiv>
      <Logo src="/image/board/login/logo.svg" />
      <LogInBoard>
        <InputEmail type="text" placeholder="이메일을 입력해주세요." />
        <InputError>이메일은 필수 입력입니다. 프롭스로 기능주기</InputError>
        <InputPassword type="password" placeholder="비밀번호를 입력해주세요." />
        <InputError>비밀번호는 필수 입력입니다. 프롭스로 기능주기</InputError>
        <LogginIn>
          <Button src="/image/board/login/logging_in.svg" />
          {/* onClick을 줘도 될거같긴한데 클릭 시 색이 변해야 하므로 고민좀 해보기 */}
          <ButtonWord>로그인 상태 유지</ButtonWord>
        </LogginIn>
      </LogInBoard>
      <LoginButton>로그인하기</LoginButton>
      <BottomBorder />
      <BottomButton>
        <SubButton>이메일 찾기</SubButton>
        <SubButton>|</SubButton>
        <SubButton>비밀번호 찾기</SubButton>
        <SubButton>|</SubButton>
        <SubButton id="/signIn">회원가입</SubButton>
      </BottomButton>
    </Wrapper>
  );
}
