import LoginBoardUI from "./LoginBoard.presenter";
import { LOGIN_BOARD } from "./LoginBoard.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginBoard() {
  const router = useRouter();

  const [loginBoard] = useMutation(LOGIN_BOARD);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyEmailError, setEmptyEmailError] = useState("");
  const [emptyPasswordError, setEmptyPasswordError] = useState("");

  const [isActive, setIsActive] = useState(false);

  function onChangeEmail(event: any) {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmptyEmailError("");
    }
    if (event.target.value !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(event: any) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setEmptyPasswordError("");
    }
    if (email !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  async function onClickLogin() {
    if (email === "") {
      setEmptyEmailError("이메일은 필수 입력입니다.");
    }
    if (password === "") {
      setEmptyPasswordError("비밀번호는 필수 입력입니다.");
    }
    // if (email !== "" && password !== "") {
    //   // setOnButton(true);
    //   alert("로그인진행할거임! 지워도되는 알럿창!");
    // }
    try {
      const result = await loginBoard({
        variables: {
          email: email,
          password: password,
        },
      });
      router.push(`/boards/create-board`);
      console.log(result.data?.loginBoard.accessToken);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginBoardUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emptyEmailError={emptyEmailError}
      emptyPasswordError={emptyPasswordError}
      // onClickLogginIn={onClickLogginIn}
      onClickLogin={onClickLogin}
      // onClickFindEmail={onClickFindEmail}
      // onClickFindPassword={onClickFindPassword}
      // onClickSignin={onClickSignin}
      isActive={isActive}
    />
  );
}
