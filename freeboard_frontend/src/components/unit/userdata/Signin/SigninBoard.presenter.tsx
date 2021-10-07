import UserDataInputBar from "../../../commons/inputs/userdatainput";
import RegisterButton from "../../../commons/buttons/registerbutton";
import {
  Wrapper,
  CancleDiv,
  Arrow,
  Title,
  ErrorMessage,
} from "./SignInBoard.styles";

export default function SignInBoardUI(props: any) {
  return (
    <>
      <Wrapper onSubmit={props.handleSubmit(props.onClickSignIn)}>
        {/* CancleDiv에 onClick기능 줘야함 */}
        <CancleDiv>
          <Arrow src="/image/board/login/ic_cancel.svg" />
        </CancleDiv>
        <Title>회원가입</Title>
        <UserDataInputBar
          title="이메일"
          type="text"
          register={props.register("MyEmail")}
          placeholder="이메일을 입력해주세요."
        />
        <ErrorMessage>{props.formState.errors.MyEmail?.message}</ErrorMessage>
        <UserDataInputBar
          title="이름"
          type="text"
          register={props.register("MyName")}
          placeholder="이름을 입력해주세요."
        />
        <ErrorMessage>{props.formState.errors.MyName?.message}</ErrorMessage>
        <UserDataInputBar
          title="비밀번호"
          type="password"
          register={props.register("MyPassword")}
          placeholder="비밀번호는 필수 입력입니다."
        />
        <ErrorMessage>
          {props.formState.errors.MyPassword?.message}
        </ErrorMessage>
        <UserDataInputBar
          title="비밀번호"
          type="password"
          register={props.register("MyPassword")}
          placeholder="비밀번호는 필수 입력입니다."
        />
        <ErrorMessage>
          {props.formState.errors.MyPassword?.message}
        </ErrorMessage>
        <RegisterButton
          name="회원가입하기"
          type="submit"
          isValid={props.formState.isValid}
        />
      </Wrapper>
    </>
  );
}
