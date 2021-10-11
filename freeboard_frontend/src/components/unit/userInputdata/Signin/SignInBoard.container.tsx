import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./SignInBoard.validations";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import SignInBoardUI from "./SignInBoard.presenter";
import { CREATE_USER } from "./SignInBoard.queries";

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
          },
        },
      });
      setIsActive(true);
      console.log(data);
      alert("회원가입성공!");
      // router.push("./login");
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
