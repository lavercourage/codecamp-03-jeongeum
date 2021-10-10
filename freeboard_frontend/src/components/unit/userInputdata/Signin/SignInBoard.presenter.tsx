import UserDataInputBar from "../../../commons/inputs/userdatainput";
import RegisterButton from "../../../commons/buttons/registerbutton";
import { Wrapper, CancleDiv, Arrow, Title } from "./SignInBoard.styles";
import { Modal, Button } from "antd";

export default function SignInBoardUI(props: any) {
  return (
    <>
      <Wrapper onSubmit={props.handleSubmit(props.onClickSignIn)}>
        {/* CancleDiv에 onClick기능 줘야함 */}
        <CancleDiv>
          <Arrow
            src="/image/board/login/ic_cancel.svg"
            onClick={props.onClickCancle}
          />
        </CancleDiv>
        <Title>회원가입</Title>
        <UserDataInputBar
          title="이메일"
          type="text"
          register={props.register("MyEmail")}
          placeholder="이메일을 입력해주세요."
          error={props.formState.errors.MyEmail?.message}
          // error={props.formState?.errors?.MyEmail?.message}
        />
        {/* <ErrorMessage>{props.formState.errors.MyEmail?.message}</ErrorMessage> */}
        <UserDataInputBar
          title="이름"
          type="text"
          register={props.register("MyName")}
          placeholder="이름을 입력해주세요."
          error={props.formState.errors.MyName?.message}
        />
        <UserDataInputBar
          title="비밀번호"
          type="password"
          register={props.register("MyPassword")}
          placeholder="비밀번호는 필수 입력입니다."
          error={props.formState.errors.MyPassword?.message}
        />
        <UserDataInputBar
          title="비밀번호"
          type="password"
          register={props.register("MyPasswordCheck")}
          placeholder="비밀번호는 필수 입력입니다."
          error={props.formState.errors.MyPasswordCheck?.message}
        />
        <RegisterButton
          name="회원가입하기"
          type="submit"
          isValid={props.formState.isValid}
        />
        {/* {props.isActive && (
          <>
            <Modal
              title="Basic Modal"
              visible={props.isModalVisible}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              회원가입을 축하합니다!
              <br />
              로그인 후 이용해주세요!
            </Modal>
            <Button type="primary" onClick={props.showModal}>
              Open Modal
            </Button>
          </>
        )} */}
      </Wrapper>
    </>
  );
}
