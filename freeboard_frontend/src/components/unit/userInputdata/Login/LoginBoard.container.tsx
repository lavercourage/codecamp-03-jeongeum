import LoginBoardUI from "./LoginBoard.presenter";
import { LOGIN_BOARD, FETCH_USER_LOGGED_IN } from "./LoginBoard.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext, IGlobalContext } from "../../../../../pages/_app";
import { useRouter } from "next/router";

export default function LoginBoard() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_BOARD);
  // LOGIN_BOARD를 실행시키는 함수 명은 loginUser

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyEmailError, setEmptyEmailError] = useState("");
  const [emptyPasswordError, setEmptyPasswordError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const globalState = useContext<IGlobalContext>(GlobalContext);

  useEffect(() => {
    if (globalState?.userInfo.email) return;
    globalState?.setUserInfo({
      email: String(data?.fetchUserLoggedIn.email),
      name: String(data?.fetchUserLoggedIn.name),
    });
  }, [data]);

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
    if (
      email !== "" &&
      event.target.value !== ""
      // 이메일에 @가 꼭 포함될때 로그인창 활성화 includes?
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  async function onClickLogin() {
    if (email === "") {
      setEmptyEmailError("이메일은 필수 입력입니다.");
    }
    // if (!email.includes("@")) {
    //   setEmptyEmailError("올바른 이메일 형식이 아닙니다.");
    // }
    if (password === "") {
      setEmptyPasswordError("비밀번호는 필수 입력입니다.");
    }
    // if (email !== "" && password !== "") {
    //   // setOnButton(true);
    //   alert("로그인진행할거임! 지워도되는 알럿창!");
    // }
    try {
      const result = await loginUser({
        // loginUser 위에 있는 [loginUser]와 동일
        variables: {
          email: email,
          password: password,
          // 서로 이름이 같을 때는 뒷 내용 생략가능
        },
      });
      // result.data?.loginUser.accessToken 26-1 하게 된다면 로그인할 때 맞게 로그인 할 수 있음

      console.log(result.data?.loginUser.accessToken);
      localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
      globalState?.setAccessToken(result.data?.loginUser.accessToken);
      router.push(`/market/list-board`);
      // alert(data?.fetchUserLoggedIn.name + " 환영합니다");
      setIsActive(true);
    } catch (error) {
      console.log(error);
    }
  }

  function onClickSignin() {
    router.push("/signIn");
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
      onClickSignin={onClickSignin}
      isActive={isActive}
    />
  );
}
