import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./signInBoard.validations";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import SignInBoardUI from "./signInBoard.presenter";
import { CREATE_USER } from "./signInBoard.queries";

export default function SignInBoard() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [createUser] = useMutation(CREATE_USER);
  const { handleSubmit, register, formState } = useForm({
    // mode: "onSubmit",
    // submit을 눌렀을 때, 검증하기
    mode: "onChange",
    // 변경이 일어났을 때, 검증하기
    resolver: yupResolver(schema),
  });

  const onClickCancle = () => {
    router.push("/");
  };

  const onClickSignIn = async (data: any) => {
    if (data.MyPassword !== data.MyPasswordCheck) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.MyName,
            email: data.MyEmail,
            password: data.MyPassword,
            // ...data 로 가능? 그러려면 MyName을 name으로 변경?
          },
        },
      });
      setIsActive(true);
      console.log("회원가입!!: ", data);
      // alert("회원가입성공!");
      router.push("./logIn");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignInBoardUI
      handleSubmit={handleSubmit}
      onClickSignIn={onClickSignIn}
      onClickCancle={onClickCancle}
      register={register}
      formState={formState}
      isActive={isActive}
      // 모달
      // isModalVisible={isModalVisible}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
    />
  );
}
