import UserDataInputBar from "../../../commons/inputs/userdatainput";
import RegisterButton from "../../../commons/buttons/registerbutton";
import { Wrapper, CancleDiv, Arrow, Title } from "./signInBoard.styles";
// import { Modal, Button } from "antd";
import { useState } from "react";

// 모달
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { formLabelClasses } from "@mui/material";

// 모달 스타일
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignInBoardUI(props: any) {
  // 모달 const
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

        {props.isActive && (
          <>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>dd</Box>
            </Modal>
          </>
        )}
        {/* {props.isActive && (
          <>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              회원가입을 축하합니다!
              <br />
              로그인 후 이용해주세요!
            </Modal>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
          </>
        )} */}
      </Wrapper>
    </>
  );
}
